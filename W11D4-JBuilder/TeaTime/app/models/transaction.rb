class Transaction < ApplicationRecord
    validates :quantity, :user_id, :tea_id, presence: true

    belongs_to :tea

    belongs_to :user
end
