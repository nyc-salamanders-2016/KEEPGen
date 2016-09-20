class SessionsController < ApplicationController
  def new
  end

def create
  user = User.find_by(username: params[:username])
  if user && user.authenticate(params[:password])
    session[:user_id] = user.id
      if user.status == "Instructor"
        redirect_to '/instructors'
      else
        redirect_to '/students'
      end
  else
    @errors = ["Invalid username/password."]
    render 'new'
  end
end

def destroy
  session[:user_id] = nil
  redirect_to root_path
end

end
