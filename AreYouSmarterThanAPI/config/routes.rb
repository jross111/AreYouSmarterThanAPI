Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # resources :welcome
      get 'welcome', to:'welcome#welcome'
      # root 'welcome#index'
      # get '/' => 'home#index'
    end
  end
end
