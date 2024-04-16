class UsersController < ApplicationController

    before_action :require_logged_out, only: [:new, :create]
    before_action :require_logged_in, only: [:index, :show, :edit, :update]

    def index
        @users = User.all
        render :index
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    def new
        render :new
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            redirect_to user_url(@user)
        else
            # debugger
            flash.now[:errors] = @user.errors.full_messages
            render :new

            # render json: @user.errors.full_messages, status: 422
        end
    end

    def edit
        @user = User.find(params[:id])
        render :edit
    end

    def update
        @user = User.find_by(id: params[:id]) 

        if @user && @user.update(user_params)
            # debugger
            redirect_to user_url(@user)
        else
            # debugger
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :age, :email, :political_affiliation, :password)
    end
end
