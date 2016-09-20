class CreateCohorts < ActiveRecord::Migration[5.0]
  def change
    create_table :cohorts do |t|
      t.string      :name,    { null: false }
      t.string      :year,    { null: false }
      t.integer     :maxPitches,    { null: false }
      t.integer     :maxVotes,    { null: false }

      t.timestamps(null:false)
    end
  end
end
