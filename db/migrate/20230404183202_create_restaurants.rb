class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :phone_number, null: false
      t.string :address, null: false
      t.string :cuisine, null: false
      t.text :description, null: false
      t.timestamps
    end
    add_index :restaurants, :name, unique: true
  end
end
