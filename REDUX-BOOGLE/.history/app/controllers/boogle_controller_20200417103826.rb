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
        puts "current_matrix: #{params[:current_matrix]}"

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
