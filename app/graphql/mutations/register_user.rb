module Mutations
  RegisterUser = GraphQL::Field.define do
    name 'RegisterUser'
    argument :registrationDetails, !Types::Inputs::UserInputType

    type Types::AuthType

    resolve ->(_obj, args, _ctx) {
      input = Hash[args['registrationDetails'].to_h.map { |k, v| [k.to_s.underscore.to_sym, v] }]
      begin
        @user = User.create!(input)
        return OpenStruct.new(user: @user, authentication_token: @user.authentication_token)
      rescue ActiveRecord::RecordInvalid => exception
        raise(
          GraphQL::ExecutionError,
          "Invalid Attributes for #{exception.record.class.name}: #{exception.record.errors.full_messages.join(', ')}"
        )
      end
    }
  end
end
