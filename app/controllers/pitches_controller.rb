class PitchesController < ApplicationController

  def index
  
    pitches = Pitch.all

    render json: {pitches: pitches}
  end
end
