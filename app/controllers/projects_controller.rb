class ProjectsController < ApplicationController

  def index
    projects = Project.all 
    render json: projects, status: :created, include: :contractor
  end

  # def show
  #   project = Project.find_by(id: params[:id])
  #   render json: project, status: :created
  # end

  def create
    project = @contractor.projects.create(project_params)
    render json: project, status: :created
  end

  def update

    project = @contractor.projects.update(project_params)
    render json: project, status: :created
  end

  def destroy
    project = Project.find_by(id: params[:id])
    project.destroy 
    head :no_content
  end

  private

  def project_params
    params.permit(:title, :image_url, :description, :duration)
  end

  def render_unauthorized_user
    render json: { error: "Unauthorized or invalid user "}, status: :unauthorized
  end

end
