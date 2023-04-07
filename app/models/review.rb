class Review < ApplicationRecord
  validates :rating, :body, presence: true
  validates :rating, numericality: true, inclusion: {in: 0..5}
  
  belongs_to :user,
  class_name: :User,
  primary_key: :id,
  foreign_key: :user_id
  
  belongs_to :restaurant,
  class_name: :Restaurant,
  primary_key: :id,
  foreign_key: :restaurant_id

end