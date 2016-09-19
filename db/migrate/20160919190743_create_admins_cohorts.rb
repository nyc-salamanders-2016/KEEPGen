class CreateAdminsCohorts < ActiveRecord::Migration[5.0]
  def change
    create_table :admins_cohorts do |t|
      t.integer       :admin_id,    { null: false }
      t.integer       :cohort_id,   { null: false }
      t.timestamps(null: false)
    end
  end
end
