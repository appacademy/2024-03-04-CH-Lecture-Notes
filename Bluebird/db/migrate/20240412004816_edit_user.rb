class EditUser < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :political_affiliation
    add_column :users, :political_affiliation, :string
  end
end
