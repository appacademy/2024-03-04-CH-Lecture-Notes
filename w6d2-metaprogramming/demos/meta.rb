require "byebug"

class Pet
  def initialize(name)
    @name = name
  end

  def self.add_pet
    @@total_pets ||= 0
    @@total_pets += 1
  end

  def self.total_pets
    @@total_pets
  end
end

class Dog < Pet
  # debugger

  def self.create_tricks(*trick_names)
    debugger
    trick_names.each do |trick_name|
      debugger
      define_method(trick_name) do |num = 1|
        debugger
        num.times do 
          puts "#{trick_name}ing"
        end
      end
    end
    
    # def dance(num = 1)
    #   num.times do 
    #       puts "#{dance}ing"
    #     end
    # end
  end

  def self.doggie_things
    # debugger
  end

  def who_am_i?
    # debugger
  end

  def initialize(name)
    super(name)
    @secret = "I'm a goat in disguise"
  end

  # def sleep
  #   puts "sleeping!"
  # end

  # def eat
  #   puts "eating!"
  # end

  # def drink
  #   puts "drinking!"
  # end

  def trick
    puts "BACK FLIP!!"
  end

  def juggle(thing, num)
    num.times do
      puts "juggling #{thing}!"
    end
  end

  def do_this_then_that(this, that)
    self.send(this)
    self.send(that)
  end

  def do_this_with_args(this, *args)
    self.send(this, *args)
  end



  private

  def tell_secret
    puts "My secret is: #{@secret}"
  end
end

