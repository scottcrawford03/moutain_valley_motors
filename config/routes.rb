Rails.application.routes.draw do
  root to: 'homepage#index'

  get '/about_us', to: 'about_us#index'
  get 'shop', to: 'shop#index'
  get 'shop/:id', to: 'shop#show'
  get 'admin/login', to: 'admin#index'

  get 'admin/import', to: 'import#index'
end
