class ApplicationController < ActionController::Base
    # skip_before_action :verify_authenticity_token

    # + Within Application Controller
    # + C => #current_user
    # + R => #require_logged_in, #require_logged_out
    # + L => #logged_in?
    # + L => #login(user)
    # + L => #logout!

    helper_method :current_user, :logged_in?

    def current_user
        current_session_token = session[:session_token]
        @current_user ||= User.find_by(session_token: current_session_token)
    end

    def require_logged_in
        redirect_to new_session_url unless logged_in?
        # redirect_to new_session_url if !logged_in?
    end

    def require_logged_out
        redirect_to users_url if logged_in?
    end

    def logged_in?
        !!current_user
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end
end
