class Pitch < ApplicationRecord
  validates :title,       { presence: true }
  validates :summary,     { presence: true }

  # belongs_to  :pitcher, class_name: "Student"
  # belongs_to  :team
  has_many :ranks
  has_many :votes
  has_many :voters, through: :votes, source: :voter
end
