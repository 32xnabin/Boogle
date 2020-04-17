class BoogleController < ApplicationController
    protect_from_forgery except: :submit_word
    def index; end
    
      def creatematrix
        board_letters = helpers.createMatrix
    
        render json: {
          data: board_letters
        }
      end
    
      def validateword
        
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
