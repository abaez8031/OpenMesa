@reservations.each do |reservation|
  json.set! reservation.id do
    json.extract! reservation, :id, :user_id, :restaurant_id, :date, :time, :num_of_guests
  end
end