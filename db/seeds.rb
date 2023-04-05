# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Restaurant.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('restaurants')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    first_name: "Ariel", 
    last_name: "Baez", 
    phone_number: "3471234567", 
    email_address: "example@gmail.com", 
    primary_dining_location: "New York", 
    password: "password"
  )

  puts "Creating restaurants..."

  Restaurant.create!(
    name: "Tacos Guey",
    phone_number: "2129918222",
    address: "37 W 19th St, New York, NY 10011",
    cuisine: "Mexican",
    description: "Come through and get some delicious drinks and tacos, guey"
  )

  Restaurant.create!(
    name: "Flats Fix Taqueria and Tequila Bar",
    phone_number: "2126330071",
    address: "28 E 16th St, New York, NY 10003",
    cuisine: "Mexican",
    description: "Our name is flats but our tacos are thick"
  )
  
    Restaurant.create!(
      name: "Tio Pio",
      phone_number: "2122396633",
      address: "250 E 14th St, New York, NY 10003",
      cuisine: "Spanish",
      description: "Our cooking is better than your favorite tio's!"
    )
  
    Restaurant.create!(
      name: "Tio Pepe",
      phone_number: "2122570689",
      address: "168 W 4th St, New York, NY 10014",
      cuisine: "Spanish",
      description: "Cooking so good you'll wish the chef was your tio Pepe"
    )
  
    Restaurant.create!(
      name: "Casa Mono",
      phone_number: "2122532773",
      address: "52 Irving Pl, New York, NY 10003",
      cuisine: "Spanish",
      description: "Small plate fans gather at this intimate Gramercy nook for upscale Spanish fare & a deep wine list"
    )
 
    Restaurant.create!(
      name: "La Churreria",
      phone_number: "2122396633",
      address: "284 Mulberry St, New York, NY 10012",
      cuisine: "Spanish",
      description: "Snug spot offering paella, tapas, & other Spanish favorites, plus coffee, wine & beer"
    )

    Restaurant.create!(
      name: "Casa Adela",
      phone_number: "2124731881",
      address: "66 Loisada Ave, New York, NY 10009",
      cuisine: "Puerto Rican",
      description: "Rotisserie chicken & cafe con leche in a pint-size, cash-only place, open since 1973"
    )
  
    puts "Done!"
end