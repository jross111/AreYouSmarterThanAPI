# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Leaderboard.create(name: 'Steven Jobs', score: "33")
Leaderboard.create(name: 'Bob Ross', score: "21")
Leaderboard.create(name: 'Bart Simpson', score: "3")
Leaderboard.create(name: 'Ian Candy', score: "48")
Leaderboard.create(name: 'Luke Skywalker', score: "21")
Leaderboard.create(name: 'Jamie Ross', score: "213")

p "Created #{Leaderboard.count} scores"
