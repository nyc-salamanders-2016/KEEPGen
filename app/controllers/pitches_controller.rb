class PitchesController < ApplicationController

  def index
    pitches = Pitch.all
    render json: {pitches: pitches}
  end

  def create
    pitch = Pitch.new(pitch_params)
    pitch.pitcher_id = current_user.id
    pitch.save
    render json: {pitch: pitch}
  end

  private

  def pitch_params
    params.require(:pitch).permit(:title, :summary)
  end
end
