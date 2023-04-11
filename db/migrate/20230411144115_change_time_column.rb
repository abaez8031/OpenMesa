class ChangeTimeColumn < ActiveRecord::Migration[7.0]
  def change
    change_column :reservations, :time, :time
  end
end
