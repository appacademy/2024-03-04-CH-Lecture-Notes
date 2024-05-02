# == Schema Information
#
# Table name: users
#
#  id                    :bigint           not null, primary key
#  username              :string           not null
#  email                 :string           not null
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#  age                   :integer
#  political_affiliation :string
#  password_digest       :string           not null
#  session_token         :string           not null
#
class User < ApplicationRecord

# + Within User Class
# + F => ::find_by_credentials(username, password)
# + I => #is_password?(password)
# + G => #generate_session_token
# + V => #validations
# + A => #attr_reader :password
# + P => #password=(password)
# + E => #ensure_session_token
# + B => #before_validation (ensure_session_token)
# + R => #reset_session_token!

    before_validation :ensure_session_token

    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        if user && user.is_password?(password) # User#is_password?
            user
        else
            nil
        end
    end

    def is_password?(password) # User#is_password?
        password_object = BCrypt::Password.new(self.password_digest)
        password_object.is_password?(password)  # BCrypt#is_password?
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

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
