class UsersController < ApplicationController
  def new
  end

  def show
    @user = User.find(params[:id])
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      if user.status == "Instructor"
        redirect_to instructors_path
      else
        redirect_to students_path
      end
    else
      @errors = user.errors.full_messages
      render 'new'
    end
  end


private
  def user_params
    params.require(:user).permit(:username, :email, :password, :status)
  end
end
