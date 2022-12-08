class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :duration, :contractor_id
end
