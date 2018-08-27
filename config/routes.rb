Rails.application.routes.draw do
  scope '/api' do
    api_version(module: 'V1', header: { name: 'API-Version', value: 'v1' }) do
      post   'user_token'      => 'user_token#create'

      # User actions
      get    '/users'          => 'users#index'
      get    '/users/current'  => 'users#current'
      post   '/users/create'   => 'users#create'
      patch  '/user/:id'       => 'users#update'
      delete '/user/:id'       => 'users#destroy'
    end
  end
end
