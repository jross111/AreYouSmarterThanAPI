class Api::V1::WelcomeController < ApplicationController

  def index
    @questions = Question.all
    render json: @questions
  end

  def getQuiz
    @quizzes = Quiz.all
  end

  def createQuiz
    @quiz = Quiz.create(quizParams)
  end

  def createQuestion
    @question = Question.create(quizParams)
  end

  private

  def questionParams
    params.require(:categories).permit(:quiz_id, :question, :array, :answer, :wrong_answer, :method, :quiz_type, :choices, :correct)
  end

  def quizParams
    params.require(:quizzes).permit(:username, :category, :quiz_type, :language, :score)
  end

end
