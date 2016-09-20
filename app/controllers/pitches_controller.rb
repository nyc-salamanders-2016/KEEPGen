class PitchesController < ApplicationController
  def index
    pitches = Pitch.where(cohort.name == current_user.cohort.name)
  end

  def show
  end

  def new
  end

  def create
    pitch = Pitch.new(pitch_params)
    pitch.save

    render json: pitch.to_json
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def pitch_params
    params.require(:pitch).permit( :title, :summary, :pitcher_id)
  end
end
