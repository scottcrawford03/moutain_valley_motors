class ImportController < ApplicationController
  def index
    # TODO: Remove this once we verify the params being sent
    puts "This happened at: #{Time.now}"
    puts "Here is the body: #{request.body}"
    puts "Here are the params: #{params}"

    # return redirect_to root_path unless valid_user(permitted_params[:username], permitted_params[:password])
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
