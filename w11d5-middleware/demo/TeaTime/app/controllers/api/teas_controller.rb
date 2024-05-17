class Api::TeasController < ApplicationController

    def index 
        @teas = Tea.all
        render :index
    end

    def show
        @tea = Tea.find(params[:id])
        render :show
    end

    def create
        debugger
        @tea = Tea.new(tea_params)

        if @tea.save
            render :info
        else
            render json: @tea.errors.full_messages, status: 422
        end
    end

    def tea_params
        params.require(:tea).permit(:flavor, :price, :description)
    end
end

