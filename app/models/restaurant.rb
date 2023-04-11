class Restaurant < ApplicationRecord
  validates :name, :phone_number, :address, :cuisine, :description, presence: true
  validates :phone_number, numericality: { only_integer: true }
  validates :name, uniqueness: true

  has_many_attached :photos

  has_many :reviews,
  class_name: :Review,
  primary_key: :id,
  foreign_key: :restaurant_id,
  dependent: :destroy

  has_many :reservations,
  class_name: :Reservation,
  primary_key: :id,
  foreign_key: :restaurant_id,
  dependent: :destroy

end
