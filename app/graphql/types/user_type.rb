Types::UserType = GraphQL::ObjectType.define do
  name 'User'

  field :id, !types.ID
  field :lastName, !types.String, property: :last_name
  field :firstName, !types.String, property: :first_name
  field :email, !types.String
end
