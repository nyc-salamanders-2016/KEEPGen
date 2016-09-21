Rails.application.routes.draw do
  root to: 'welcome#index'
  resources :users, only: [:show, :new, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :students, only: [:index]
  resources :cohorts, only: [:create]
  resources :pitches, only: [:index, :create]
  resources :votes, only: [:index, :create]

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  get '/students/:id', to: 'students#show'
  get '/students' => 'students#show'
  get '/instructors' => 'instructors#show'
end
