class Vote < ApplicationRecord
  belongs_to :voter, class_name: "Student"
  belongs_to :pitch
end
