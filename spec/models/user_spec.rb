describe User do
  subject { build(:user) }

  describe '#email' do
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_uniqueness_of(:email) }
  end

  describe '#first_name' do
    it { is_expected.to validate_presence_of(:first_name) }
  end

  describe '#last_name' do
    it { is_expected.to validate_presence_of(:last_name) }
  end

  describe '#password' do
    it { is_expected.to validate_confirmation_of(:password) }
    it { is_expected.to validate_length_of(:password).is_at_least(8) }
    it { is_expected.to validate_length_of(:password).is_at_most(72) }
  end
end
