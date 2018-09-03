Rails.application.routes.draw do
  scope '/api' do
    post 'login', to: 'authentication#authenticate'
  end
end
