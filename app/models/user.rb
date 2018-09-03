class User < ApplicationRecord
  has_secure_password

  belongs_to :company

  validates :password, length: { maximum: 72, minimum: 8 }
  validates :password, confirmation: true

  validates :first_name, :last_name, :email, presence: true
  validates :email, uniqueness: true
end
