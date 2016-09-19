class CreateAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :admins do |t|
      t.string    :username,    { null: false, unique: true }
      t.string    :email,       { null: false, unique: true }
      t.string    :password,    { null: false }
      t.timestamps(null: false)
    end
  end
end
