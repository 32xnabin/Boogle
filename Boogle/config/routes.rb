Rails.application.routes.draw do
  root 'games#index'
 post 'submit_word', to: 'games#submit_word'
end
