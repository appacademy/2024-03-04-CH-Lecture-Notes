require 'byebug'
# n + n -1 + n -2 ... + 0
def iter_sum(n)
    sum = 0
    while n >= 0
        sum += n
        n -= 1
    end
    sum
end

# p iter_sum(3) #6
# p iter_sum(7) #28
# p iter_sum(100) #5050




def rec_sum(n)
    return 0 if n == 0
    rec_sum(n - 1) + n

end

# p "-------- RECURSION --------"
# p rec_sum(3)
# p rec_sum(7)
# p rec_sum(100)
# p rec_sum(100000) 


def iter_reverse(str)
    i = str.length - 1
    result = ""
    while i >= 0
        result += str[i]
        i -= 1
    end
    result
end  

# p iter_reverse("cat")   # tac






def rec_reverse(str) 
    return "" if str.length == 0
    # rec_reverse(str[1..-1]) + str[0]
    str[-1] + rec_reverse(str[0...-1])
    #    ac                       t
end

# p rec_reverse("cat")





# Fibonacci examples:
# 0, 1, 1, 2, 3, 5
# Return the nth Fibonacci number
# $count = 0
def fibs(n)
    $count += 1
    return 0 if n == 1
    return 1 if n == 2

    fibs(n - 1) + fibs(n - 2)
end 

# p fibs(1)  # 0
# p fibs(2)  # 1 
# p fibs(3)  # 1
# p fibs(4)  # 2
# p fibs(5)  # 3
# p fibs(20)  # 5
# p $count







# Find all the Fibonacci numbers up to and including the nth
# $count = 0
# fibs = {3: [0,1,1], 4: [0,1,1,2]}
def all_fibs(n)
    $count += 1
    return [] if n == 0
    return [0] if n == 1
    return [0, 1] if n == 2

    
    all_fibs(n - 1) << all_fibs(n - 1)[-1] + all_fibs(n - 1)[-2]
end

# p all_fibs(0) #=> []
# p all_fibs(1) #=> [0]
# p all_fibs(2) #=> [0, 1]
# p all_fibs(3) #=> [0, 1, 1]
# p all_fibs(4) #=> [0, 1, 1, 2]
# p all_fibs(5) #=> [0, 1, 1, 2, 3]
# p all_fibs(20)
# p $count










# now with memoization!
$count = 0

def fast_all_fibs(n)
    $count += 1
    # return [] if n == 0
    # return [0] if n == 1
    # return [0, 1] if n == 2
    return [0,1].take(n) if n <= 2

    
    prev_fibs = fast_all_fibs(n - 1)

    prev_fibs << prev_fibs[-1] + prev_fibs[-2]

end

# p fast_all_fibs(0)
# p fast_all_fibs(1)
# p fast_all_fibs(2) 
# p fast_all_fibs(3) 
# p fast_all_fibs(4) 
# p fast_all_fibs(5) 
# p fast_all_fibs(6) 
# p fast_all_fibs(100)
# p $count



# Pascal's Triangle
#         1
#        1 1
#       1 2 1
#      1 3 3 1
#     1 4 6 4 1
#   1 5 10 10 5 1
# 1 6 15 20 15 6 1

def pascal_row(n)
    return [1] if n == 0
    return [1, 1] if n == 1

    last_row = pascal_row(n - 1)
    new_row = []
    (0...last_row.length - 1).each do |i|
        new_row << last_row[i] + last_row[i + 1]
    end

    [1] + new_row + [1]
end

p pascal_row(0)  # [1]
p pascal_row(1)  # [1, 1]
p pascal_row(2)  # [1, 2, 1]
p pascal_row(3)  # [1, 3, 3, 1]
p pascal_row(4)  # [1, 4, 6, 4, 1]
p pascal_row(5)  # [1, 5, 10, 10, 5, 1]
p pascal_row(6)  # [1, 6, 15, 20, 15, 6, 1]