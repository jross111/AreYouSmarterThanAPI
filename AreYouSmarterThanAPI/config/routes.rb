Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :welcome
      # get 'index', to:'welcome#index'
      # root 'welcome#index'
      # get '/' => 'home#index'
    end
  end
end
