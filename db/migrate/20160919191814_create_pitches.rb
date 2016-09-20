class CreatePitches < ActiveRecord::Migration[5.0]
  def change
    create_table :pitches do |t|
      t.integer     :pitcher_id,    { null: false }
      # t.integer     :team_id,       { null: false }
      t.string      :title,         { null: false }
      t.text        :summary,       { null: false }
      t.timestamps(null: false)
    end
  end
end
