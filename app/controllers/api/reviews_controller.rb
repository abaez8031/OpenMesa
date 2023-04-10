class Api::ReviewsController < ApplicationController
  
  def index
    @restaurant = Restaurant.find(params[:restaurant_id])
    @reviews = @restaurant.reviews
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.restaurant_id = params[:restaurant_id]
    if @review.save
      render :show
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  def update
    @review = Review.find(params[:id])
    @review.update(review_params)
  end

  private

  def review_params
    params.require(:review).permit(:rating, :body)
  end

end