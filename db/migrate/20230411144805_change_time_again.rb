class ChangeTimeAgain < ActiveRecord::Migration[7.0]
  def change
    remove_column :reservations, :time
    add_column :reservations, :time, :integer
  end
end
