Rails.application.routes.draw do
  scope '/api' do
    # mount point for React proxy to Rails api
  end

  post '/graphql', to: 'graphql#execute'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
