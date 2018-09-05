class AuthenticationController < BaseController
  skip_before_action :authorize_request, only: :authenticate

  def authenticate
    auth_token, user =
      AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    json_response(auth_token: auth_token, user: UserSerializer.new(user))
  end

  private

  def auth_params
    params.permit(:email, :password)
  end
end
