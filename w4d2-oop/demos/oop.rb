require_relative './walkable.rb'
# require_relative './animal.rb'

class Animal
  include Walkable

  def initialize(name)
    @name = name
  end

  def eat(food)
    puts "*#{self.name} eats the #{food}*"
  end

  # def walk
  #   puts "*#{name} is walking*"
  # end

  protected
  attr_reader :name

end


# ----------------------------------------------

# Dog Class

class Dog < Animal

  # def initialize(name)
  #   @name = name
  # end

  def introduce
    puts "#{name} bork bork"
    puts self.name
  end

  def fetch(item)
    puts "*#{name} excitedly fetches #{item} and wants you to throw it again*"
  end

  # def eat(food)
  #   puts "*#{self.name} eats the #{food}*"
  # end

  def sniff(other_dog)
    puts "*#{name} sniffs #{other_dog.name}'s butt. interesting.*"
  end

  # Private Setter Explicit Demo
  # def rename(new_name)
  #   self.name = new_name
  # end

  # protected
  # attr_reader :name

  private
  attr_writer :name

end

fluff = Dog.new("Fluff")
# fluff.introduce
# fluff.fetch("ball")
# fluff.eat("garbage")

rocky = Dog.new("Rocky")
# rocky.introduce
# p rocky.name
# fluff.sniff(rocky)

# rocky.rename("Spot")
# p rocky


# ----------------------------------------------

# Cat Class

class Cat < Animal

  def initialize(name, fur_color)
    super(name)
    @fur_color = fur_color
  end

  def introduce
    puts "#{name} meow"
  end

  # def eat(food)
  #   puts "*#{self.name} eats the #{food}*"
  # end

  # protected
  # attr_reader :name

end

# rocky.walk
# snowball = Cat.new("Snowball", "white")
# p snowball
# snowball.walk


# ----------------------------------------------

# Robot Class

class Robot
  include Walkable

  def initialize(name)
      @name = name
  end

  # def walk
  #     puts "*#{name} is walking*"
  # end

  private
  attr_reader :name

end

marvin = Robot.new("Marvin")
marvin.walk
rocky.walk
