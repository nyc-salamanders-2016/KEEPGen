class Pitch < ApplicationRecord
  # validates :pitcher_id
  # validates :team_id,     { presence: true }
  validates :title,       { presence: true }
  validates :summary,     { presence: true }

<<<<<<< a6fe0c811dc2db7b7e85884f2de2840fd8aed073
  # belongs_to  :pitcher, class_name: "Student"
  # belongs_to  :team
=======
  belongs_to  :pitcher, class_name: "User"
  belongs_to  :team
>>>>>>> deleted all of devise and recreated users
  has_many :ranks
  has_many :votes
  has_many :voters, through: :votes, source: :voter
end
