class MyQueue
    def initialize
        @inner_arr = []
    end

    def enqueue(el)
        inner_arr.unshift(el)
        self
    end

    def dequeue
        inner_arr.pop
    end

    def show
        inner_arr.dup
    end

    def empty?
        inner_arr.empty?
    end

    def inspect
        "#<Queue:#{self.object_id}>"
    end
    private
    attr_reader :inner_arr
end
