class Api::UserController < ApplicationController
  def show
    if current_user
      render json: {email: current_user.email}
    else
      render json: {}
    end
  end
end
