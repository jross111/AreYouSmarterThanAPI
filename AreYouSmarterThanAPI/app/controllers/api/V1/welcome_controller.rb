class Api::V1::WelcomeController < ApplicationController

  def index
    @questions = Question.all
    render json: @questions
  end

  def getQuiz
    @quizzes = Quiz.all
  end

end
