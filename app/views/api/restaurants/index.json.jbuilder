@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :phone_number, :address, :cuisine, :description, :reviews
    json.photo restaurant.photo
  end
end