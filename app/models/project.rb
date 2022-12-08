class Project < ApplicationRecord
  belongs_to :contractor

  validates :description, presence: true, length: { minimum: 15 }
  validates :title, presence: true
end
