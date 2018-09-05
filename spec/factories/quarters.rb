FactoryBot.define do
  factory :quarter do
    quarter { [1, 2, 3, 4].sample }
    sequence(:year) { |x| x }
    active { false }
  end
end
