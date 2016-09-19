class Student < ApplicationRecord
  validates   :username,    { presence: true, uniqueness: true }
  validates   :email,       { presence: true, uniqueness: true }
  validates   :password,    { presence: true }
  validates   :cohort_id,   { presence: true }

  has_many  :pitches, foreign_key: "pitcher_id"
  belongs_to :team
  has_many :ranks
  has_many :votes, foreign_key: "voter_id"
  belongs_to :cohort
end
