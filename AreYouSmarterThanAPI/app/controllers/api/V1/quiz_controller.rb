class Api::V1::QuizController < ApplicationController

  def create
    @quiz = Quiz.create(quiz_params)
  end

  private

  def quiz_params
    params.require(:quizzes).permit(:username, :category, :quiz_type, :language, :score)
  end
  snake_case

  lowerCamelCase
end
