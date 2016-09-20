class AdminMailer < ApplicationMailer

  def new_student_waiting_for_approval
    @admin = Admin.all
    @url = 'http://www.example.com'
    @admin.each do |user|
      mail(to: user.email, subject: 'A New Student Approval Is Waiting')
    end
  end
end
