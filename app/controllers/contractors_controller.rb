class ContractorsController < ApplicationController

  def create
    contractor = Contractor.create(contractor_params)
    session[:contractor_id] = contractor.id 
    render json: contractor, status: :created
  end

  def show
    return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :contractor_id
    contractor = Contractor.find_by(id: session[:contractor_id])
    render json: contractor, status: :ok
  end

  private

  def contractor_params
    params.permit(:name, :password, :password_confirmation, :contact, :overview)
  end

end

