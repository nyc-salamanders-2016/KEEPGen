class User < ApplicationRecord
  has_secure_password
  validates   :username,    { presence: true, uniqueness: true }
  validates   :email,       { presence: true, uniqueness: true }
  validates   :password,    { presence: true }
  has_many :users_cohorts
  has_many :cohorts, through: :users_cohorts
  has_many :pitches, foreign_key: "pitcher_id"
  has_many :ranks
  has_many :votes, foreign_key: "voter_id"
end
