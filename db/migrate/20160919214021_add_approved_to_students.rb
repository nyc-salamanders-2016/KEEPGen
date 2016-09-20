class AddApprovedToStudents < ActiveRecord::Migration[5.0]
  def self.up
    add_column :students, :approved, :boolean, :default => false, :null => false
    add_index  :students, :approved
  end

  def self.down
    remove_index  :students, :approved
    remove_column :students, :approved
  end
end
