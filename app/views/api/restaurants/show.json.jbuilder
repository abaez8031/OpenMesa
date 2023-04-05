json.user do
  json.extract! @restaurant, :id, :name, :phone_number, :address, :cuisine, :description
end