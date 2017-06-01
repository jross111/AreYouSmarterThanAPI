class CreateQuizzes < ActiveRecord::Migration[5.1]
  def change
    create_table :quizzes do |t|
      t.string :username
      t.string :category
      t.string :quiz_type
      t.string :language
      t.integer :score
    end
  end
end
