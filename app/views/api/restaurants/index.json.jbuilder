@restaurants.each do |restaurant|
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :phone_number, :address, :cuisine, :description, :reviews
    json.photo_url restaurant.photo.attached? ? restaurant.photo.url : nil
  end
end