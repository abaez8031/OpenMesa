json.user do
  json.extract! @user, :id, :first_name, :last_name, :phone_number,:email_address, :primary_dining_location, :reservations, :reviews
end