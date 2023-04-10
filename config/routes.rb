Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update, :destroy]
    resource :session, only: [:show, :create, :destroy]
    resources :restaurants, only: [:index, :show] do
      resources :reviews, only: [:index, :create]
    end
    resources :reviews, only: [:destroy, :update, :show]
  end
  get '*path', to: "static_pages#frontend_index"
end
