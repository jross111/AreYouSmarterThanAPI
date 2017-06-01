class Api::V1::WelcomeController < ApplicationController

  def welcome
  end

  def getQuiz
    @quizzes = Quiz.all
  end

  def createQuiz
    @quiz = Quiz.create(quizParams)
  end

  private

  def leaderboardParams
    params.require(:categories).permit(:ruby, :iteration, :manipulation, :selection)
  end

  def quizParams
    params.require(:quizzes).permit(:username, :category_id, :number_of_questions, :score)
  end

end
