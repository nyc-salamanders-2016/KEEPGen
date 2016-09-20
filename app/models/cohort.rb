class Cohort < ApplicationRecord
  validates   :name,    { presence: true }
  validates   :year,    { presence: true }

  has_many  :users_cohorts
  has_many  :users, through: :users_cohorts
end
