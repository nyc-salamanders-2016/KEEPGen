class Cohort < ApplicationRecord
  validates   :name,    { presence: true }
  validates   :year,    { presence: true }

  has_many  :admins_cohorts
  has_many  :admins, through: :admins_cohorts
end
