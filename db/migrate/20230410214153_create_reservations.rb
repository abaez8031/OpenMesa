class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :user, foreign_key: {to_table: :users}, null: false
      t.references :restaurant, foreign_key: {to_table: :restaurants}, null: false
      t.datetime :time, null: false
      t.timestamps
    end
  end
end
