class Restaurant < ApplicationRecord
  validates :name, :phone_number, :address, :cuisine, :description, presence: true
  validates :phone_number, numericality: { only_integer: true }
  validates :name, uniqueness: true
end
