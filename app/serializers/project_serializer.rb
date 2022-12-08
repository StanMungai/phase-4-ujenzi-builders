class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image_url, :duration, :contractor_id

  has_one :contractor 
end
