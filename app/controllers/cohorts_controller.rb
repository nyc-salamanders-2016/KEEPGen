class CohortsController < ApplicationController

  def create

    cohort = Cohort.new(cohort_params)
  # cohort = Cohort.new(name: params['name'], year: params['year'], maxPitches: params['maxPitches'], maxVotes: params['votes'])

  cohort.save

  render json: {cohort: cohort}
  end

  private

  def cohort_params
    params.require(:cohort).permit( :name, :year, :maxPitches, :maxVotes )
  end
end
