@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :name, :phone_number, :address, :cuisine, :description
  end
end