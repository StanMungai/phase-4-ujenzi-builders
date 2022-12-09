Rails.application.routes.draw do
  resources :projects, only: [:index, :create, :update, :destroy]
  # resources :contractors
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/signup', to: "contractors#create"
  get '/me', to: "contractors#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
end
