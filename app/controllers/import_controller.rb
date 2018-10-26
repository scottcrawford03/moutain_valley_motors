class ImportController < ApplicationController
  def index
    # return redirect_to root_path unless valid_user(permitted_params[:username], permitted_params[:password])
    puts "Here is the body: #{request.body}"
    puts "Here are the params: #{params}"
    # ImportService.import!

    render json: "OK"
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
