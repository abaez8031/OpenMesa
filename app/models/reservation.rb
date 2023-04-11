class Reservation < ApplicationRecord
  validates :time, :date, :num_of_guests presence: true
  validates :num_of_guests, numericality: {in: 1..20}

  belongs_to :user,
  class_name: :User,
  primary_key: :id,
  foreign_key: :user_id

  belongs_to :restaurant,
  class_name: :Restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id
  
end