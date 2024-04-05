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
    # User
    #     .first




    #Get last user record, use last
    # User
        # .last

    #Find a user that exists by id, use find
    # User
        # .find(1)




    #Find a user that doesn't exist by id, use find
    # User
        # .find(100)  # throws an error





    #Find a user by username, use find_by
    # User
        # .find_by(username: "catz")
    
    




    #Find a user by username that does not exist, use find_by
    # User.find_by(username: "catzz")  # returns nil






    # phase 2
    #Find all users between the ages of 10 and 20 inclusive. Show their username, and political affiliation.
    # User
    #     .select(:username, :political_affiliation)
    #     .where("users.age BETWEEN 10 AND 20")
    # User
        # .select(:username, :political_affiliation)
        # .where(age: 10..20)









    #Find all users not younger than the age of 11. Use `where.not`
    # User
    #     .where.not("age < 11")
    # User
    #     .where.not("age < ?", 11)












    #Find all political_affiliations of our users
    # User
    #     .select(:political_affiliation)
    #     .group(:political_affiliation)
    
    # User
        # .select(:political_affiliation)
        # .distinct















    #Find all users who has a political affiliation in this list and order by ascending
    # political_affiliations = ["Ruby", "C"]
    # User
    #     .where("political_affiliation IN (?)", political_affiliations)
    #     .order(username: :asc)
    # User
    #     .where(political_affiliation: political_affiliations)
    #     .order(username: :asc)













end
