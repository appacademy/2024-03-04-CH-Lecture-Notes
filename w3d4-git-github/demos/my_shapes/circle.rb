class Circle
    def initialize(radius, x, y)
        @radius = radius
        @x = x
        @y = y
    end

    def area
        Math::PI * (@radius ** 2)
    end

    def roll
        puts "I'm rolling now!!!"
    end
end
