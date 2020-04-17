module BoogleHelper
    def createMatrix
      consonants = %w[b c d f g h j k l m n p q r s t v w x y z]
      vowels = %w[a e i o u]
      
      matrixSize = 4
      totalLetters = matrixSize ** 2
      totalVowels = (totalLetters * 0.4).ceil
      totalConsonants = totalLetters - totalVowels
      matrixLetters = []
      matrixRow = []

       # mixig vowels and consonents
      totalVowels.times do
        matrixRow.push(vowels[rand(vowels.length)])
  
        if matrixRow.count == matrixSize
          matrixLetters.push(matrixRow)
          matrixRow = []
        end
      end
  
      totalConsonants.times do
        matrixRow.push(consonants[rand(consonants.length)])
  
        if matrixRow.count == matrixSize
          matrixLetters.push(matrixRow)
          matrixRow = []
        end
      end
  
      puts "createMatrix: #{matrixLetters}"
      matrixLetters.shuffle!
    end
  
    def checkWord
      word = params[:word]
  
      app_id = 'b0d3c2de'
      app_key = '4f15f3a8d5425fc7ca492e9cc4e5edb8'
      lang = 'en-gb'
      word_id = word
      fields = 'definitions'
      strict_match = 'false'
  
      url = 'https://od-api.oxforddictionaries.com:443/api/v2/entries/'
      url += lang + '/' + word_id + '?fields=' + fields + '&strictMatch=' + strict_match
      headers = {
        app_id: app_id,
        app_key: app_key
      }
      request = HTTParty.get(url, headers: headers)
      request.success? ? word : ''
    end
  
    def checkInMatrix
      require 'set'
      puts "current_matrix in helper: #{params[:current_matrix]}"
      currentMatrix = params[:current_matrix]
      row_size = currentMatrix.count
      currentWord = params[:word]
      allLetters = params[:word].split('')
      directions = {
        up: [-1, 0],
        up_right: [-1, 1],
        right: [0, 1],
        down_right: [1, 1],
        down: [1, 0],
        down_left: [1, -1],
        left: [0, -1],
        up_left: [-1, -1]
      }
  
      firstLetter = getPositions(currentMatrix, allLetters[0])
  
     
  
      lettersSet = Set.new
  
      firstLetter.each do |val|
        directions.each do |key2, val2|
          joinedLetters = ''
          limit = row_size
          cursor = {
            row: val[:row],
            col: val[:col]
          }
  
          until limit.zero?
            begin
              joinedLetters += currentMatrix[cursor[:row]][cursor[:col]]
              cursor[:row] += val2[0]
              cursor[:col] += val2[1]
              return true if joinedLetters.include? currentWord
  
              break if cursor[:row].negative? || cursor[:col].negative?
            rescue StandardError => e
              puts "Errors: #{e.inspect}"
              
              break
            end
            limit -= 1
          end
          lettersSet.add(joinedLetters) unless joinedLetters.strip.empty?
        end
      end
      false
    end
  
    def getPositions(matrix, letter)
      matches = []
  
      matrix.each_with_index do |val, row_index|
        val.each_with_index do |val2, col_index|
          next unless letter == val2
  
          matches.push(
            row: row_index,
            col: col_index
          )
        end
      end
  
      matches
    end
  end
  