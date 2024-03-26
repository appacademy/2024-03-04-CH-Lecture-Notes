# No abstraction, bad! 

# sec = 0
# min = 0
# hrs = 0

# def tick(sec, min, hrs)
#     sec += 1
#     if sec == 60
#         sec = 0
#         min += 1
#     end
#     if min == 60
#         min = 0 
#         hrs += 1
#     end
#     hrs = 0
#     return [sec, min, hrs]
# end

# def print(sec, min, hrs)
#     puts "#{hrs}:#{min}:#{sec}"
# end

# while true
#     sleep(1)
#     print(sec, min, hrs)
#     new_time = tick(sec, min, hrs)
#     sec = new_time[0]
#     mins = new_time[1]
#     hrs = new_time[2]
# end





# Abstraction, good!

class Clock
    attr_accessor :sec, :min, :hrs

    def initialize
        @sec = 0
        @min = 0
        @hrs = 0
    end

    def run
        while true 
            sleep(1)
            tick
            print
        end
    end
    
    private

    def tick
        self.sec += 1
        # seconds = 1
        increment_min
        increment_hrs
    end

    def print
        puts "#{self.hrs}:#{self.min}:#{self.sec}"
    end
    
    def increment_min
        if self.sec == 60
            self.min += 1
            self.sec = 0 
        end
    end

    def increment_hrs
        if self.min == 60
            self.hrs += 1
            self.min = 0 
        end
    end

end

# Clock.new.run





# ----------------------------------------------

# require "byebug"

# Private Setter Test

# class Test

#     def initialize
#         @name = "test"
#     end

#     def rename(new_name)
#         # name = new_name
#         self.name = new_name
#         debugger
#     end

#     private
#     attr_accessor :name # getter and setter for our @name ivar

# end

# a = Test.new
# a.rename("sarah")
# p a



# ----------------------------------------------

# Public Method Test

# class Test
#     def test_method(other_instance)
#         public_method                   # a
#         self.public_method              # b
#         other_instance.public_method    # c
#     end

#     def public_method
#         puts "This is a public method"
#     end
# end

# a = Test.new
# b = Test.new
# a.test_method(b)
# a.public_method                         # d





# ----------------------------------------------

# Private Method Test

# class Test
#     def test_method(other_instance)
#         private_method                  # a
#         self.private_method             # b
#         other_instance.private_method   # c
#     end

#     private
#     def private_method
#         puts "This is a private method"
#     end
# end

# a = Test.new
# b = Test.new
# a.test_method(b)
# a.private_method                        # d





# ----------------------------------------------

# Protected Method Test

# class Test
#     def test_method(other_instance)
#         protected_method                  # a
#         self.protected_method             # b
#         other_instance.protected_method   # c
#     end

#     protected
#     def protected_method
#         puts "This is a protected method"
#     end
# end

# a = Test.new
# b = Test.new
# a.test_method(b)
# a.protected_method                        # d