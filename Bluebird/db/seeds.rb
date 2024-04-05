# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# We want to make sure that every time we seed, it's a 'clean' seed, with no duplicate rows in our DB
# We want to destroy the data in the order it 'belongs to'

Like.destroy_all # belongs to Chirps and Users
Chirp.destroy_all # belongs to Users
User.destroy_all # can exist on its own

ActiveRecord::Base.connection.reset_pk_sequence!('likes')
ActiveRecord::Base.connection.reset_pk_sequence!('chirps')
ActiveRecord::Base.connection.reset_pk_sequence!('users')

# Users
paloma = User.create!(
  username: "awesome_person", 
  email: "awesome_person@email.com", 
  age: 10, 
  political_affiliation: "JavaScript"
)

valerie = User.create!(
  username: "valerous", 
  email: "valerous@email.com", 
  age: 15, 
  political_affiliation: "Ruby"
)

daniel = User.create!(
  username: "dan_the_man", 
  email: "dan_the_man@email.com", 
  age: 30, 
  political_affiliation: "Ruby"
)

megan = User.create!(
  username: "the_wizard", 
  email: "the_wizard@email.com", 
  age: 30, 
  political_affiliation: "CSS"
)

cathy = User.create!(
  username: "catz", 
  email: "catz@email.com", 
  age: 30, 
  political_affiliation: "Ruby"
)

raz = User.create!(
  username: "squirelly", 
  email: "squirelly@email.com", 
  age: 40, 
  political_affiliation: "JavaScript"
)

david = User.create!(
  username: "talk_to_the_hand", 
  email: "talk_to_the_hand@email.com", 
  age: 50, 
  political_affiliation: "Ruby"
)

justin = User.create!(
  username: "justin_gets_buckets", 
  email: "justin_gets_buckets@email.com", 
  age: 44, 
  political_affiliation: "JavaScript"
)

brad = User.create!(
  username: "beep_boop", 
  email: "beep_boop@email.com", 
  age: 300, 
  political_affiliation: "C++"
)

greta = User.create!(
  username: "adventursaurus", 
  email: "adventursaurus@email.com", 
  age: 1, 
  political_affiliation: "JavaScript"
)

big_company = User.create!(
  username: "instructors_rock", 
  email: "instructors_rock@email.com", 
  age: 89, 
  political_affiliation: "Instructors"
)


# chirps
chirp1 = Chirp.create!(author_id: david.id, body: "Please use my messaging app, it's way better than Twitter.")
chirp2 = Chirp.create!(author_id: big_company.id, body: "Hello fellow instructors.")
chirp3 = Chirp.create!(author_id: big_company.id, body: "Have you seen this sweet instructor merch?")
chirp4 = Chirp.create!(author_id: justin.id, body: "Sweeeeeet.")
chirp5 = Chirp.create!(author_id: cathy.id, body: "Kahoots are an opportunity to mess with students.")

chirp6 = Chirp.create!(author_id: valerie.id, body: "Raaaaaiiiils.")
chirp7 = Chirp.create!(author_id: cathy.id, body: "This is a random quote I found online. -Some person, 2020.")
chirp8 = Chirp.create!(author_id: justin.id, body: "JavaScript is the best coding language.")

chirp9 = Chirp.create!(author_id: david.id, body: "Programmer: A machine that turns coffee into code.")
chirp10 = Chirp.create!(author_id: big_company.id, body: "You're a wizard, instructor.")


# Likes

# cathy
Like.create!(liker_id: cathy.id, chirp_id: chirp1.id)
Like.create!(liker_id: cathy.id, chirp_id: chirp4.id)
Like.create!(liker_id: cathy.id, chirp_id: chirp6.id)
Like.create!(liker_id: cathy.id, chirp_id: chirp8.id)
Like.create!(liker_id: cathy.id, chirp_id: chirp9.id)

# David
Like.create!(liker_id: david.id, chirp_id: chirp6.id)
Like.create!(liker_id: david.id, chirp_id: chirp7.id)
Like.create!(liker_id: david.id, chirp_id: chirp8.id)
Like.create!(liker_id: david.id, chirp_id: chirp4.id)

# raz
Like.create!(liker_id: raz.id, chirp_id: chirp4.id)
Like.create!(liker_id: raz.id, chirp_id: chirp5.id)
Like.create!(liker_id: raz.id, chirp_id: chirp8.id)

# justin
Like.create!(liker_id: justin.id, chirp_id: chirp5.id)
Like.create!(liker_id: justin.id, chirp_id: chirp6.id)

# Big Company
Like.create!(liker_id: big_company.id, chirp_id: chirp1.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp4.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp5.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp6.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp7.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp8.id)
Like.create!(liker_id: big_company.id, chirp_id: chirp9.id)

puts "Done!"