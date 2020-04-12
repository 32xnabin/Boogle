class GamesController < ApplicationController
  protect_from_forgery except: :submit_word
  def index; end

  
  

  def submit_word
   
      result = helpers.check_word

      print result

      render json: {
        submitted_word: params[:letters],
        result: result
      }
    
  end
end