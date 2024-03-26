class Animal
    def initialize(name)
      @name = name
    end
  
    def eat(food)
      puts "*#{self.name} eats the #{food}*"
    end
  
    def walk
      puts "*#{name} is walking*"
    end
  
    protected
    attr_reader :name
  
  end