Rails.application.routes.draw do
  devise_for :students
  devise_for :admins
  #ignore this route, devise needs a root to in order to work
  root to: 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :admins, only: [:index]
  resources :pitches, only: [:index]
  resources :students, only: [:index]
  resources :cohorts, only: [:create]
  resources :votes, only: [:create]
end
