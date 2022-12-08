class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :contact, :overview
end
