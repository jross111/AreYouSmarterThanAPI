class Api::V1::QuizController < ApplicationController

  def create
    @quiz = Quiz.new(quizParams)
    if @quiz.save
      render :json => { }
    else
      render :json => { }, :status => 500
    end

  end

  private

  def quizParams
    params.require(:quizzes).permit(:username, :category, :quiz_type, :language, :score)
  end

end
