class Api::V1::QuestionController < ApplicationController

  def index
    @questions = Question.all
    render json: @questions
  end

  def show
    @question = Question.find_by(id: params[:id])
    render json: @question
  end

  def create
    @question = Question.create(question_params)
  end

  private

  def question_params
    params.permit(:quiz_id, :question, :array, :answer, :wrong_answer, :method, :quiz_type, :choices, :correct)
  end

end
