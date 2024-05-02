class ChirpsController < ApplicationController
    def index
        @chirps = Chirp.all
        # render json: @chirps
        render :index
    end

    def show
        @chirp = Chirp.find(params[:id])
        render json: @chirp
    end

    def new
    end

    def create
        @chirp = Chirp.new(chirp_params)
        @chirp.author = current_user
        if @chirp.save
            redirect_to chirps_url
        else
            render json: @chirp.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @chirp = Chirp.find(params[:id])

        if @chirp.update(chirp_params)
            redirect_to chirp_url(@chirp)
        else
            render json: @chirp.errors.full_messages, status: 422
        end
    end

    def destroy
        @chirp = Chirp.find(params[:id])

        @chirp.destroy

        redirect_to chirps_url
    end
    
    private
    def chirp_params
        params.require(:chirp).permit(:body)
    end
end