class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :admin, :created_at, :updated_at, :last_login
end
