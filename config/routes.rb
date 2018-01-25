Rails.application.routes.draw do
  resources :orders
  namespace :admin do
    resources :products
  end
end
