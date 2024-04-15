class SessionsController < ApplicationController

    before_action :require_logged_out, only: [:new, :create]
    before_action :require_logged_in, only: [:destroy]

    def new
        @user = User.new
        render :new
    end

    def create
        username = params[:user][:username]
        password = params[:user][:password]
        @user = User.find_by_credentials(username, password)

        if @user
            login(@user)
            redirect_to user_url(@user)
        else
            @user = User.new(username: username)
            render :new
        end
    end

    def destroy
        logout!
        redirect_to new_session_url
    end
end