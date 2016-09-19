class Team < ApplicationRecord
  has_many :students
  has_one :pitch

  validates :name, presence: true
end
