class Api::RestaurantsController < ApplicationController
 
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

  def search
    @restaurants = Restaurant.where("name iLIKE '%#{params[:query]}%' OR cuisine iLIKE '%#{params[:query]}%'")
    render :search
  end
  
end