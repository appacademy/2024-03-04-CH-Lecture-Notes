
# O(1)
def first_thing(array)
  array.first
end


# O(1)
def three_hundred_thousand_puts(name)
  300000.times { puts "hello, #{name}" }
end

# O(n)
def print_all(array)
  array.each { |el| puts el }
end


# O(n) time complexity
# O(n) space complexity
def most_common_char(word)
  # O(1)
  counts = Hash.new(0)

  # O(n)+ O(n)  =>  O(2n) => O(n)
  word.chars.each { |char| counts[char] += 1 }

  # O(1)
  count.max_by { |_, num| num }
end









class Array
  # O(n)
  def include?(value)
    self.each do |el|
      return true if (el == value) 
    end
    
    false
  end
end

# arr.includes?("a")  # O(n)
# arr.pop() # O(1)
# arr[index] # O(1)
# arr.shift() # O(n)
# arr.unshift("val")  # O(n)
# arr.push("val") # O(1)






#  O(log(n)) time complexity
# O(log(n)) space complexity
def bsearch(nums, target, start = 0, finish = nums.length)
  return nil if start == finish

  mid = (finish - start) / 2 + start
  case target <=> nums[mid]
  when -1
    bsearch(nums, target, start, mid)
  when 0
    mid
  when 1
    bsearch(nums, target, mid + 1, finish)
  end
end









class Array
  # time complexity: O(n log(n))
  # space complecity: O(n log(n))
  def merge_sort
    return self if count < 2

    middle = count / 2

    left, right = self.take(middle), self.drop(middle)
    sorted_left, sorted_right = left.merge_sort, right.merge_sort

    self.class.merge(sorted_left, sorted_right)
  end

  def self.merge(left, right)
    merged_array = []
    until left.empty? || right.empty?
      merged_array << ((left.first < right.first) ? left.shift : right.shift)
    end

    merged_array + left + right
  end
end

# time complexity: O(n^2)
# space complexity: O(n^2)
def all_pair_sums(array)
  sums = []

  array.each do |el1|
    array.each do |el2|
      sums << el1 + el2
    end
  end

  sums
end
