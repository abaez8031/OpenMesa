class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.references :user, foreign_key: {to_table: :users}, null: false
      t.references :restaurant, foreign_key: {to_table: :restaurants}, null: false
      t.integer :rating, null: false
      t.text :body, null: false
      t.timestamps
    end
  end
end
