Rails.application.routes.draw do
  # get 'validation/index'
  root 'boogle#index'
  get 'get_board_letters', to: 'boogle#creatematrix'
  post 'submit_word', to: 'boogle#validateword'
end
