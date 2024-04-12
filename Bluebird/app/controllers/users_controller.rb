
class UsersController < ApplicationController

    def index
        @users = User.all
        # render json: @users
        render :index
    end

    def show
        @user = User.find(params[:id])
        # render json: @user
        render :show
    end

    def new
        debugger
        # render :new
    end


    def create
        # debugger
        @user = User.new(user_params)
        if @user.save
            redirect_to user_url(@user)
            # after user is successfully created, send the client to the show page 
            # for the user that was just created 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end


    def edit
        @user = User.find(params[:id])
        render :edit
    end



    def update
        @user = User.find_by(id: params[:id]) 

        if @user && @user.update(user_params)
            redirect_to user_url(@user)
        else
            render json: @user.errors.full_messages, status: 422
        end
    end


    private

    def user_params
        params.require(:user).permit(:username, :age, :email, :political_affiliation, :password)
    end
end
