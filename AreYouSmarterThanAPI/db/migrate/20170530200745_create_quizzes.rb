class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.string :username
      t.integer :category_id
      t.integer :number_of_questions
      t.integer :score

      t.timestamps
    end
  end
end
