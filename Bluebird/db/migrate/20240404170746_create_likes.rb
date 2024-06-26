class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.references :liker, null: false, foreign_key: { to_table: :users }
      t.references :chirp, null: false, foreign_key: true
      t.timestamps
    end

    add_index :likes, [:chirp_id, :liker_id], unique: true
  end
end
