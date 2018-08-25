describe Types::AuthType do
  types = GraphQL::Define::TypeDefiner.instance

  describe ':authenticationToken field' do
    it 'maps to authentication_token property' do
      expect(subject).to have_a_field(:authenticationToken).with_property(:authentication_token)
    end

    it 'has a type of String' do
      expect(subject).to have_a_field(:authenticationToken).that_returns(!types.String)
    end
  end
end
