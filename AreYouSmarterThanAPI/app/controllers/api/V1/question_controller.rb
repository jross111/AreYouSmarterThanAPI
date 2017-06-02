class Api::V1::QuestionController < ApplicationController

  def index
    @questions = Question.all
    render json: @questions
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render json: @question
    end
  end

  def show
    @question = Question.find_by(id: params[:id])
    render json: @question
  end

  private

  def question_params
    params.permit(:quiz_id, :question, :array, :answer, :wrong_answer, :method, :quiz_type, :choices, :correct)
  end

end
