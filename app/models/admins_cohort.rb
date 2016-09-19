class AdminsCohort < ApplicationRecord
  belongs_to  :admin
  belongs_to  :cohort
end
