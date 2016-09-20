class StudentController < ApplicationController
  def index
    if params[:approved] == "false"
      @students = Student.where(approved: false)
    else
      @students = Student.all
    end
  end

  def show
    @student = Student.find(params[:id])
  end

# registration methods are in student folder, devise-d
end
