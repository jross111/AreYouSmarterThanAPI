class Api::V1::QuizController < ApplicationController

  def getQuiz
    @quizzes = Quiz.all
  end

  def getCategory
    @categories = Catergory.all
  end

  def createQuiz
    @quiz = Leaderboard.create(quizParams)
  end

  def createCategory
    @category = Leaderboard.create(categoryParams)
  end

  private

  def leaderboardParams
    params.require(:categories).permit(:ruby, :iteration, :manipulation, :selection)
  end

  def quizParams
    params.require(:quizzes).permit(:username, :category_id, :number_of_questions, :score)
  end

end
