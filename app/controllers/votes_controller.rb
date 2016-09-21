class VotesController < ApplicationController

  def index
    topvotes = Vote.group(:pitch_id).order('count_pitch_id desc').count('pitch_id')

    votedpitches = topvotes.keys[0..6].map do |id|
      Pitch.find(id)
    end

    render json: {topPitches: votedpitches}
  end
  def create
    vote = Vote.new(pitch_id: params['pitchId'])
    vote.save
    render json: {vote: vote}
  end
end
