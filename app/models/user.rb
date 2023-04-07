class User < ApplicationRecord
  has_secure_password
  before_validation :ensure_session_token
  
  has_many :reviews,
  class_name: :Review,
  primary_key: :id,
  foreign_key: :user_id,
  dependent: :destroy

  validates :first_name, :last_name, :phone_number, :email_address, :primary_dining_location, :password_digest, :session_token, presence: true

  validates :phone_number, numericality: { only_integer: true }
  validates :email_address, format: { with: URI::MailTo::EMAIL_REGEXP }, length: {in: 3..255}
  validates :email_address, :session_token, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  def self.find_by_credentials(email_address, password)
    
    user = User.find_by(email_address: email_address)
    if user && user.authenticate(password)
      user
    else
      nil
    end
  end

  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end

  private

  def generate_unique_session_token
    token = SecureRandom.urlsafe_base64
    while User.exists?(session_token: token)
      token = SecureRandom.urlsafe_base64
    end
    token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

end
