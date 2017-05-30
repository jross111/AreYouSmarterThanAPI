class CreateCategories < ActiveRecord::Migration[5.1]
  def change
    create_table :categories do |t|
      t.boolean :ruby
      t.boolean :iteration
      t.boolean :manipulation
      t.boolean :selection

      t.timestamps
    end
  end
end
