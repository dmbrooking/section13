Types::AuthType = GraphQL::ObjectType.define do
  name 'AuthType'

  field :user, Types::UserType
  field :authenticationToken, !types.String, property: :authentication_token
end
