Rails.application.routes.draw do
  root to: 'welcome#index'
  resources :users, only: [:show, :new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< a6fe0c811dc2db7b7e85884f2de2840fd8aed073
  resources :admins, only: [:index]
  resources :pitches, only: [:index]
  resources :students, only: [:index]
  resources :cohorts, only: [:create]
  resources :votes, only: [:create]
=======

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

>>>>>>> deleted all of devise and recreated users
  get '/students/:id', to: 'students#show'
  get '/admins', to: 'admins#show'

end
