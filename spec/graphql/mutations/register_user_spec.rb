# describe Mutations::RegisterUser do
#   it 'registers a new user when args are valid' do
#     args = {}
#     expect(result(args)).to eq('123')
#   end

#   it 'logs the user in and returns an auth token on success'

#   it 'returns an error if args are invalid' do
#     args = {}
#     expect { result(args) }.to raise_error(GraphQL::ExecutionError, /^Invalid Attributes for User/)
#   end

#   it 'returns an error if email is already taken' do
#     user = create(:user)
#     args = {
#       user: {
#         firstName: user.first_name,
#         lastName: user.last_name,
#         email: user.email,
#         password: user.password
#       }
#     }
#     expect { result(args) }.to raise_error(GraphQL::ExecutionError, /^Invalid Attributes for User123/)
#   end

#   def result(args)
#     described_class.resolve(nil, args, nil)
#   end

#   # do
#   #   args = {}
#   #   expect(described_class.resolve(nil, args, nil)).to eq('123')
#   # end
# end
