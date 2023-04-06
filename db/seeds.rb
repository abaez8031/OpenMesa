# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "open-uri"

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
    description: "Our name is flats but our tacos are dummy thick"
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

  Restaurant.create!(
    name: "Nadas - Rainbow Gluten Free Empanadas",
    phone_number: "6466818735",
    address: "48 Greenwich Ave, New York, NY 10011",
    cuisine: "Colombian",
    description: "Our story is simple, we are people who love people through innovative Colombian flavors. Having arrived from Colombia in 1999 with a child and only $600 bucks, Olga Santos always dreamt of opening her own business, so, amid the financial crash in 2008, she took a leap of faith and opened Aqui Es Santa Fe in New York. Fast forward to 2020, a year unlike any other, it was now that energetic boy Carlos' turn to take another leap of faith. What begun as a campaign to help feed hospital workers and affordable housing communities throughout New York City during the pandemic sparked a new business idea. With the hospitality industry being flipped upside down, he decided to take their highly touted and unique Empanadas and share them with the world"
  )
  
  Restaurant.create!(
    name: "Empanada Mama LES",
    phone_number: "2126730300",
    address: "95 Allen St, New York, NY 10002",
    cuisine: "Colombian",
    description: "Known for having the best Empanadas in NYC, Empanada Mama is a colorful, vibrant and casual Latin restaurant in the neighborhood of Hell’s Kitchen, LES, and Times Square in Manhattan."
  )

  Restaurant.create!(
    name: "El Rancho Colombiano",
    phone_number: "2017661570",
    address: "3401 Bergenline Ave, Union City, NJ 07087",
    cuisine: "Colombian",
    description: "Casual eatery specializing in grilled meats, plus many other traditional Colombian specialties."
  )

  Restaurant.create!(
    name: "Noches de Colombia",
    phone_number: "2012222617",
    address: "231-233 Central Ave, Jersey City, NJ 07307",
    cuisine: "Colombian",
    description: "At Noches de Colombia, the Colombian and non-Colombian alike will find it difficult to resist the aromas of slow-cooked meats seasoned to perfection making the most tender, juicy and succulent steak and seafood dishes. The scent of creamy garlic-butter sauces and sweet plantains fill the air creating an authentic Colombian experience that our clients gravitate to. Each dish is served with a special garnish to satisfy the memory of mom’s homemade Colombian food and the portions for the price are reason enough for anyone to continue returning."
  )

  Restaurant.create!(
    name: "Mi Bella Colombia",
    phone_number: "2013484601",
    address: "4512 Bergenline Ave, Union City, NJ 07087",
    cuisine: "Colombian",
    description: "Seguro, vos sos latinoamericano. Pues acá te esperamos pa' que vivamos una experiencia al paladar como en casa. Con saborcito Colombiano. Ah! Y si venís el fin de semana te tengo un menú especial y además variadito. Para que no te aburrás de comer siempre lo mismo. Acá lo que encontrás es comida para todos los gustos y paladares. Ven en familia que comer en buena compañía hace que la experiencia sea aún mejor. Estás de acuerdo conmigo? Acá nos vemos pues."
  )

    puts "Done!"
end