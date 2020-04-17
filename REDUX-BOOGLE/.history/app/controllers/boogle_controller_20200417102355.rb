class BoogleController < ApplicationController
    protect_from_forgery except: :validateWord
    def index; end
    
      def createMatrix
        matrix = helpers.createMatrix
    
        render json: {
          data: matrix
        }
      end
    
      def validateWord
        
        puts "word: #{params[:word]}"
        puts "board: #{params[:board_letters]}"

        word_in_board = helpers.checkInMatrix
        if word_in_board
          result = helpers.checkWord
    
          render json: {
            submitted_word: params[:word],
            result: result
          }
        else
          render json: {
            submitted_word: params[:word],
            result: ''
          }
        end
      end
    end
