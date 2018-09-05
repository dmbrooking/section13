class Quarter < ApplicationRecord
  validates :quarter, :year, presence: true

  validates :quarter, uniqueness: { scope: :year, message: 'already defined for given year' }
  validates :quarter, inclusion: { in: [1, 2, 3, 4] }
  validates :active, inclusion: { in: [true, false] }

  validates :active, uniqueness: true, if: :active

  def code
    "#{year}Q#{quarter}"
  end

  def description
    "#{quarter.ordinalize} quarter of #{year}"
  end

  def inactivate
    self.active = false
    save!
  end

  def activate
    self.active = true
    save!
  end
end
