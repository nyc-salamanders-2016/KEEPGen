class CreateUserCohorts < ActiveRecord::Migration[5.0]
  def change
    create_table :users_cohorts do |t|
      t.integer       :user_id,    { null: false }
      t.integer       :cohort_id,   { null: false }
      t.timestamps(null: false)
    end
  end
end
