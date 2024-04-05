# == Schema Information
#
# Table name: users
#
#  id                    :bigint           not null, primary key
#  username              :string           not null
#  email                 :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  political_affiliation :string           not null
#  age                   :integer          not null
#
class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true

    has_many :chirps,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :Chirp

    has_many :likes,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :Like
        
    has_many :liked_chirps,
        through: :likes,
        source: :chirp

    # Phase 1
    #Get first user record, use first

    #Get last user record, use last

    #Find a user that exists by id, use find

    #Find a user that doesn't exist by id, use find

    #Find a user by username, use find_by
    
    #Find a user by username that does not exist, use find_by

    # phase 2
    #Find all users between the ages of 10 and 20 inclusive. Show their username, and political affiliation.

    #Find all users not younger than the age of 11. Use `where.not`

    #Find all political_affiliations of our users

    #Find all users who has a political affiliation in this list and order by ascending
    #political_affiliations = ["Ruby", "C"]

end
