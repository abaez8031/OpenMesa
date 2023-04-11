class UpdateReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :date, :date, null: false
    add_column :reservations, :num_of_guests, :integer, null: false, numericality: {in: 1..20}
  end
end
