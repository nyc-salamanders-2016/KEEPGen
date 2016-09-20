class Student < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  validates   :username,    { presence: true, uniqueness: true }
  validates   :email,       { presence: true, uniqueness: true }
  validates   :password,    { presence: true }
  validates   :cohort_id,   { presence: true }

  has_many  :pitches, foreign_key: "pitcher_id"
  # belongs_to :team
  has_many :ranks
  has_many :votes, foreign_key: "voter_id"
  belongs_to :cohort

  # these override existing devise methods so admin can approve students
  def disapprove
    self.approved = false
  end
  def approve
    self.approved = true
  end
  def active_for_authentication?
    super && approved?
  end
  def inactive_message
    approved? ? super : "Your account has not been approved"
  end

  # for mailer to let admin know to approve new student:
  # after_create :send_admin_mail
  # def send_admin_mail
  #   AdminMailer.new_student_waiting_for_approval(self).deliver
  # end
end
