class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: { unique: true }
      t.string :email, null: false
      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
