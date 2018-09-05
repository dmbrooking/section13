describe Quarter do
  subject { build(:quarter) }

  describe '#quarter' do
    it { is_expected.to validate_presence_of(:quarter) }
    it { is_expected.to validate_inclusion_of(:quarter).in_array([1, 2, 3, 4]) }
    it {
      is_expected.to validate_uniqueness_of(:quarter).scoped_to(:year).with_message('already defined for given year')
    }
  end

  describe '#year' do
    it { is_expected.to validate_presence_of(:year) }
  end

  describe '#active' do
    it 'only allows one active record to be saved' do
      subject.active = true
      subject.save
      expect { create(:quarter, active: true) }.to raise_exception(ActiveRecord::RecordInvalid)
    end
  end

  describe '#code' do
    it 'returns a formatted code of the quarter' do
      expect(subject.code).to eq("#{subject.year}Q#{subject.quarter}")
    end
  end

  describe '#description' do
    it 'returns a formatted string representation of the quarter' do
      expect(subject.description).to eq("#{subject.quarter.ordinalize} quarter of #{subject.year}")
    end
  end
end
