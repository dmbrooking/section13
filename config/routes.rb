Rails.application.routes.draw do
  scope '/api' do
    post 'login', to: 'authentication#authenticate'

    resources :quarters, only: [:index] do
      collection do
        get 'active'
        post 'activate'
        post 'inactivate'
      end
    end
  end
end
