class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true

    has_many :transactions, 
        dependent: :destroy
end
