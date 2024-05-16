class Tea < ApplicationRecord
    validates :flavor, :price, presence: true
    validates :flavor, uniqueness: true

    has_many :transactions, 
        dependent: :destroy

end
