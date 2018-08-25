describe Types::Inputs::UserInputType do
  types = GraphQL::Define::TypeDefiner.instance

  it 'accepts the expected arguments' do
    expect(subject).to accept_arguments(
      firstName: !types.String,
      lastName: !types.String,
      email: !types.String,
      password: !types.String
    )
  end
end
