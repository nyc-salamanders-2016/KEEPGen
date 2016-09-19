class CreateRanks < ActiveRecord::Migration[5.0]
  def change
    create_table :ranks do |t|
      t.integer :pitch_id, { null: false }
      t.integer :student_id, { null: false }
      t.integer :value, { default: 0 }

      t.timestamps
    end
  end
end
