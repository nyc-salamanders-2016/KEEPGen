class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  #add to students controller? admin needs this for approving students
  # def index
  #   if params[:approved] == "false"
  #     @students = Student.where(approved: false)
  #   else
  #     @students = User.all
  #   end
  # end
end
