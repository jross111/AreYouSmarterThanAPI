class Api::V1::QuizController < ApplicationController

  def index
    @quizzes = Quiz.all
    render json: @quizzes
  end

  def create
    @quiz = Quiz.new(quiz_params)
    if @quiz.save
      render json: @quiz
    end
  end

  def show
    @quiz = Quiz.find_by(id: params[:id])
    render json: @quiz
  end

  private

  def quiz_params
    params.permit(:username, :category, :quiz_type, :language, :score)
  end

end
