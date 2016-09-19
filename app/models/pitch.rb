class Pitch < ApplicationRecord
  validates :pitcher_id,  { presence: true }
  validates :team_id,     { presence: true }
  validates :title,       { presence: true }
  validates :summary,     { presence: true }

  belongs_to  :pitcher, class_name: "Student"
end
