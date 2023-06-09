class Api::ReservationsController < ApplicationController
  
  def index
    @reservations = Reservation.all
  end

  def show
    @reservation = Reservation.find(params[:id])
  end

  def create
    @reservation = Reservation.new(reservation_params)
    if @reservation.save
      render :show
    else
      render json: { errors: @reservation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    @reservation = Reservation.find(params[:id])
    @reservation.update(reservation_params)
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
  end

  private

  def reservation_params
    params.permit(:time,:date,:num_of_guests, :restaurant_id, :user_id)
  end

end