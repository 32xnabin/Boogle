Rails.application.routes.draw do
  # get 'validation/index'
  root 'boogle#index'
  get 'creatematrix', to: 'boogle#createMatrix'
  post 'validateword', to: 'boogle#validateWord'
end
