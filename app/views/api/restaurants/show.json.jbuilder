# json.restaurant do
  json.extract! @restaurant, :id, :name, :phone_number, :address, :cuisine, :description, :reviews
# end