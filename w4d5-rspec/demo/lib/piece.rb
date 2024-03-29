class Piece
    attr_reader :color
    attr_accessor :pos
    def initialize(color, board, pos)
        @color = color
        @pos = pos
        @board = board

        raise "Invalid color" unless [:white, :black].include?(color)
        raise "Invalid position" unless board.valid_pos?(pos)
    end

    def symbol
        raise NotImplementedError
    end

    def to_s
        " #{symbol} "
    end

    def empty?
        false
    end
end