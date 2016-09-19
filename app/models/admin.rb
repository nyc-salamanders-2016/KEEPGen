class Admin < ApplicationRecord
  validates   :username,    { presence: true, uniqueness: true }
  validates   :email,       { presence: true, uniqueness: true }
  validates   :password,    { presence: true }

  has_many  :admins_cohorts
  has_many  :cohorts, through: :admins_cohorts
end
