module V1
  class UsersController < BaseController
    before_action :authenticate_user
    skip_before_action :authenticate_user, only: [:create]

    def index
      render json: { status: 200, msg: 'Logged-in' }
    end

    def create
      user = User.new(user_params)
      render json: { status: 200, msg: 'User was created.' } if user.save
    end

    def update
      user = User.find(params[:id])
      render json: { status: 200, msg: 'User details have been updated.' } if user.update(user_params)
    end

    def destroy
      user = User.find(params[:id])
      render json: { status: 200, msg: 'User has been deleted.' } if user.destroy
    end

    private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
  end
end
