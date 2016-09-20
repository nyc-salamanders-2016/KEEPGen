class Team < ApplicationRecord
  has_many :users
  has_one :pitch

  validates :name, presence: true
end
