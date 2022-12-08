class Contractor < ApplicationRecord
  has_secure_password

  has_many: projects

  validates :name, presence: true
  validates :contact, presence: true, length: { is: 10 }
end
