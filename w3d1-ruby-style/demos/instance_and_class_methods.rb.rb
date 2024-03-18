require "byebug"

class Fish

    @@all_fish = []

    # attr_reader :name
    # attr_writer :name

    attr_accessor :name


    def self.random_state_of_being
        [true, false].sample
    end

    def self.all_fish
        @@all_fish
    end

    # factory method
    def self.make_nemo
        Fish.new("nemo", Fish.random_state_of_being)
    end
    # factory method too!
    def self.make_random_fish
        name = ""
        5.times do
            name += ('a'..'z').to_a.sample
        end
        self.new(name, self.random_state_of_being)
    end

    def initialize(name, lost)
        @name = name
        @lost = lost

        @@all_fish << self
    end

    def lost?
        @lost
    end

    def find
        @lost = false
    end
    # def name
    #     @name
    # end

    # def name=(new_name)
    #     @name = new_name
    # end
end