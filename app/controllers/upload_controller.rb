class UploadController < ApplicationController
  def index
    return redirect_to root_path unless valid_user(permitted_params[:username], permitted_params[:password])

  end

  private

  def valid_user(username, password)
    return false if username != "admin"
    return false if password != "password"
    true
  end

  def permitted_params
    params.permit(:username, :password)
  end
end
