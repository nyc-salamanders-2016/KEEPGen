class Team < ApplicationRecord
  has_many :students
  has_many :pitches

  validates :name, presence: true
end
