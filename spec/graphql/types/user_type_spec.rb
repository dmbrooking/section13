describe Types::UserType do
  types = GraphQL::Define::TypeDefiner.instance

  it 'has an :id field of ID type' do
    expect(subject).to have_a_field(:id).that_returns(!types.ID)
  end

  describe ':firstName field' do
    it 'maps to first_name property' do
      expect(subject).to have_a_field(:firstName).with_property(:first_name)
    end

    it 'has a type of String' do
      expect(subject).to have_a_field(:firstName).that_returns(!types.String)
    end
  end

  describe ':lastName field' do
    it 'maps to last_name property' do
      expect(subject).to have_a_field(:lastName).with_property(:last_name)
    end

    it 'has a type of String' do
      expect(subject).to have_a_field(:lastName).that_returns(!types.String)
    end
  end

  it 'has a :email field of String type' do
    expect(subject).to have_a_field(:email).that_returns(!types.String)
  end
end
