# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = Category.create([{
  ruby: true,
  iteration: false,
  manipulation: false,
  selection: false
},{
  ruby: false,
  iteration: true,
  manipulation: false,
  selection: false
},{
  ruby: false,
  iteration: false,
  manipulation: true,
  selection: false
},{
  ruby: false,
  iteration: false,
  manipulation: false,
  selection: true,
},{
  ruby: false,
  iteration: false,
  manipulation: true,
  selection: false
},{
  ruby: false,
  iteration: false,
  manipulation: false,
  selection: false
},{
  ruby: false,
  iteration: true,
  manipulation: false,
  selection: false
},{
  ruby: false,
  iteration: false,
  manipulation: false,
  selection: true
},{
  ruby: false,
  iteration: true,
  manipulation: false,
  selection: false
},{
  ruby: true,
  iteration: false,
  manipulation: false,
  selection: false
}])
p "Seeded 10 Categories"

quizzes = Quiz.create([{
  username: "SJobs",
  category_id: 3,
  number_of_questions: 9,
  score: 33
},{
  username: "BigBen",
  category_id: 4,
  number_of_questions: 7,
  score: 32
},{
  username: "ICandy",
  category_id: 1,
  number_of_questions: 19,
  score: 77
},{
  username: "MMerin",
  category_id: 7,
  number_of_questions: 13,
  score: 74
},{
  username: "BHop",
  category_id: 7,
  number_of_questions: 13,
  score: 66
},{
  username: "SClause",
  category_id: 8,
  number_of_questions: 15,
  score: 55
},{
  username: "JamieRoss",
  category_id: 5,
  number_of_questions: 29,
  score: 97
},{
  username: "StupidSue",
  category_id: 1,
  number_of_questions: 3,
  score: 4
},{
  username: "BobRoss",
  category_id: 8,
  number_of_questions: 13,
  score: 87
},{
  username: "BGates",
  category_id: 2,
  number_of_questions: 9,
  score: 55
}])

p "Seeded 10 Quizzes"
