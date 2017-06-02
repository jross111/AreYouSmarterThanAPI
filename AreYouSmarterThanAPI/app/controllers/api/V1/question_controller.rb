class Api::V1::QuestionController < ApplicationController

  def create
    @question = Question.create(quizParams)
  end

  private

  def questionParams
    params.require(:categories).permit(:quiz_id, :question, :array, :answer, :wrong_answer, :method, :quiz_type, :choices, :correct)
  end

end
