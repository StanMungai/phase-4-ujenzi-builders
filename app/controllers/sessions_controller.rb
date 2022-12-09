class SessionsController < ApplicationController

  def create
    contractor = Contractor.find_by(name: params[:name])
    if contractor&.authenticate(params[:password])
      session[:contractor_id] = contractor.id
      render json: contractor, status: :created
    else
      render json: { "errors": "Invalid username or password" }, status: :unauthorized
    end
  end

  # def destroy
  #   if session[:contractor_id]
  #     session[:contractor_id] = nil
  #   else
  #     render json: { "errors": "Invalid name or password" }, status: :unauthorized
  #   end
  # end

  def destroy
    # user = User.find_by(username, params[:username])
    # user.destroy
    session[:contractor_id] = nil
  end
end
