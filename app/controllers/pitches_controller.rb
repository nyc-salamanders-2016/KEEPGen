class PitchesController < ApplicationController

  def index

  end

  def create
    pitch = Pitch.new
    pitch.title = params[:title]
    pitch.summary = params[:summary]
    pitch.save
    render json: {pitch: pitch}
  end

  private

  def pitch_params
    params.require(:pitch).permit(:title, :summary)
  end
end
