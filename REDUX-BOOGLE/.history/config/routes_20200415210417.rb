Rails.application.routes.draw do
  # get 'validation/index'
  root 'boogle#index'
  get 'get_board_letters', to: 'boogle#generate_board_letters'
  post 'submit_word', to: 'boogle#submit_word'
end
