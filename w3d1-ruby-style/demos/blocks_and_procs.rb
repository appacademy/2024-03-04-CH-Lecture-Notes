require "byebug"
class Array
    def my_each_block(&prc)

        # puts block_given?
        i = 0


        while i < self.length
            prc.call(self[i])
            i += 1
        end

        self
    end


    def my_each_proc(prc)

        my_each_block(&prc)

        # debugger
        # i = 0

        # while i < self.length
        #     prc.call(self[i])
        #     i += 1
        # end

        # self
    end

    def my_each_block_yield
        i = 0


        while i < self.length
            yield(self[i])
            i += 1
        end

        self
    end
end

arr = [1,2,3]
# arr.my_each_block {|ele| puts ele}
# prc = Proc.new { |ele| puts ele}
# arr.my_each_proc(prc)
arr.my_each_block_yield {|ele| puts ele}