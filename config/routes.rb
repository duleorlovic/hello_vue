Rails.application.routes.draw do
  devise_for :users
  get 'pages/home'
  root to: 'pages#home'

  # API
  scope :api, module: :api, defaults: {format: :json} do
    get 'user', to: 'user#show'
    put 'user', to: 'user#update'

    resources :posts
  end
  scope :api, defaults: {format: :json} do
    devise_scope :user do
      post 'signup', to: 'devise/registrations#create'
      post 'login', to: 'devise/sessions#create'
      delete 'logout', to: 'devise/sessions#destroy'
    end
  end

  get '*path', to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
