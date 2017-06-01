class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.integer :quiz_id
      t.string :question
      t.string :array
      t.string :answer
      t.string :wrong_answer
      t.string :method
      t.string :quiz_type
      t.string :choices
      t.boolean :correct
    end
  end
end
