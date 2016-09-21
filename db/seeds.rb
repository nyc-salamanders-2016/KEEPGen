# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = Admin.create!(username: 'admin', email: 'admin@yahoo.com', password: 'password')
salamanders = Cohort.create!(name: 'salamanders', year: 2016)
magoo = Student.create!(username: 'magoo', email: 'magoo@yahoo.com', encrypted_password: 'password', cohort_id: 1)
mr = Student.create!(username: 'mr', email: 'mr@yahoo.com', password: 'password', cohort_id: 1)

pitch1 = Pitch.create!(pitcher_id: mr.id, title: "idea", summary: "erases all errors")
pitch2 = Pitch.create!(pitcher_id: magoo.id, title: "idear", summary: "erases all memories")

vote1 = pitch1.votes.create!(voter_id: magoo.id)
vote2 = pitch1.votes.create!(voter_id: mr.id)
vote3 = pitch2.votes.create!(voter_id: magoo.id)
vote4 = pitch2.votes.create!(voter_id: mr.id)

team1 = Team.create!(name: 'team')
