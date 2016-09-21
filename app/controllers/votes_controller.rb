class VotesController < ApplicationController
  def create
    vote = Vote.new(pitch_id: params['pitchId'])
    vote.save
    render json: {vote: vote}
  end
end
