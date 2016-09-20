class CreateAdminsCohorts < ActiveRecord::Migration[5.0]
  def change
    create_table :admins_cohorts do |t|
      t.integer       :admin_id
      t.integer       :cohort_id
      t.timestamps(null: false)
    end
  end
end
