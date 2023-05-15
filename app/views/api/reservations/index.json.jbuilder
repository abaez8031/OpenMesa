@reservations.each do |reservation|
  json.set! reservation.id do
    json.extract! reservation, :id, :user_id, :restaurant_id, :date, :time, :num_of_guests, :restaurant, :user
    json.photo_url reservation.restaurant.photo.attached? ? reservation.restaurant.photo.url : nil
  end
end