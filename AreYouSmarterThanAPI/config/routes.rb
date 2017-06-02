Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      post '/quiz/create', to: 'quiz#create'
      post '/question/create', to: 'question#create'

      resources :welcome
      resources :quiz
      resources :question


      # get 'index', to:'welcome#index'
      # root 'welcome#index'
      # get '/' => 'home#index'
    end
  end
end
