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
  Review.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('restaurants')
  ApplicationRecord.connection.reset_pk_sequence!('reviews')

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

  User.create!(
    first_name: "Talisa",
    last_name: "Ramos",
    phone_number: "1234567890",
    email_address: "talisa@ramos.com",
    primary_dining_location: "New York",
    password: "password"
  )

  User.create!(
    first_name: "Marleen",
    last_name: "Ayala",
    phone_number: "0987654321",
    email_address: "marleen@ayala.com",
    primary_dining_location: "New York",
    password: "password"
  )

  User.create!(
    first_name: "John",
    last_name: "Smith",
    phone_number: "3216547890",
    email_address: "mrsmith@gmail.com",
    primary_dining_location: "New York",
    password: "password"
  )

  User.create!(
    first_name: "Harry",
    last_name: "Potter",
    phone_number: "1237779201",
    email_address: "gryffindorpotter@gmail.com",
    primary_dining_location: "New York",
    password: "password"
  )

  puts "Creating restaurants..."

  Restaurant.create!(
    name: "Tacos Guey",
    phone_number: "2129918222",
    address: "37 W 19th St, New York, NY 10011",
    cuisine: "Mexican",
    description: "This is an intimate and attractive operation in the heart of the Flatiron District. Add on a warm welcome, impeccable service and inventive food—no wonder it's a hit. While the city may boast many a Mexican spot, this inviting and high-end concept bucks the trend by way of spacious tables that afford privacy, a tempting bar and custom blue-gray tiles. The menu is a veritable sensory thrill via ingredient combos that are seemingly familiar yet deliciously creative. Big eye tuna crudo with avocado crema makes a bright kickoff and may be tailed by sea bass ceviche with gooseberry. Scallop aguachile showcases finger lime as a perfect counterpoint to the mild cucumber; while birria tacos arrive with salsa negra and a bowl of savory broth for dipping."
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
    description: "Established in 2003, Tio Pio has been a longstanding establishment within the MetroTech community in Brooklyn. This thriving restaurant brought irresistible flavors to the neighborhood through its famous rotisserie chicken, beans and rice. Even in the midst of the 2020 global pandemic, Tio Pio was there to support the community with delivery and take-out meals. Our new location, Tio Pio East will bring the same beloved flavors to the Manhattan community."
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
  
  Restaurant.create!(
    name: "El Castillo de Jagua",
    phone_number: "7186845187",
    address: "679 Flatbush Ave, Brooklyn, NY 11225",
    cuisine: "Dominican",
    description: "Unfussy restaurant featuring rotisserie chicken, stews & roast pork, plus some castle-themed decor."
  )


  Restaurant.create!(
    name: "La Cabaña Rodríguez",
    phone_number: "7182870248",
    address: "1062 Flatbush Ave, Brooklyn, NY 11226",
    cuisine: "Dominican",
    description: "Bustling joint featuring simple Spanish, Cuban & Dominican dishes in an informal atmosphere."
  )

  Restaurant.create!(
    name: "Genao",
    phone_number: "7183840085",
    address: "162 Throop Ave, Brooklyn, NY 11206",
    cuisine: "Dominican",
    description: "Genao is always packed with customers, drawn in by the rich aroma of savory dishes and lively Latin music. The walls are adorned with vibrant paintings and photos of the Dominican Republic, transporting diners to another world. With each bite of mofongo or pernil, patrons felt like they were experiencing a piece of the Caribbean right in their own neighborhood."
  )

  Restaurant.create!(
    name: "La Ñapa",
    phone_number: "3474350920",
    address: "656 Nostrand Ave., Brooklyn, NY 11216",
    cuisine: "Dominican",
    description: "Savor the flavors of the Caribbean at our Dominican restaurant. Enjoy delicious mofongo and pernil while surrounded by vibrant decor and lively music."
  )

  Restaurant.create!(
    name: "La Isla Cuchifritos",
    phone_number: "7183884666",
    address: "6 Graham Ave, Brooklyn, NY 11206",
    cuisine: "Puerto Rican",
    description: "Popular, long-running spot doling out classic Puerto Rican plates in small, basic quarters."
  )

  Restaurant.create!(
    name: "Tu Cachapa Inc",
    phone_number: "2125687575",
    address: "4195 Broadway, New York, NY 10033",
    cuisine: "Venezuelan",
    description: "Compact counter-service place offering Venezuelan-style sandwiches, arepas & other street eats."
  )

  Restaurant.create!(
    name: "Santa Salsa",
    phone_number: "3473652710",
    address: "234 Starr St, Brooklyn, NY 11237",
    cuisine: "Venezuelan",
    description: "Hip, casual eatery serving Venezuelan street food such as yuca fries, burgers & hot dogs."
  )

  Restaurant.create!(
    name: "Patacon Pisao",
    phone_number: "6466785913",
    address: "139 Essex St, New York, NY 10002",
    cuisine: "Venezuelan",
    description: "Patacón sandwiches (meat between fried plantain cakes), arepas & other Venezuelan street fare."
  )

  Restaurant.create!(
    name: "Palacio De Los Pepitos",
    phone_number: "6469323453",
    address: "91-8 Roosevelt Ave, Queens, NY 11372",
    cuisine: "Venezuelan",
    description: "Comida Venezolana especializada en Pepitos clásicos. También encuentra sándwiches, arepas y otras comidas callejeras al estilo venezolano. Straightforward Venezuelan take-out spot specializing in Classic Style Pepitos and other Venezuelan-style sandwiches, arepas & other street eats."
  )

  Restaurant.create!(
    name: "Guacuco",
    phone_number: "7183872300",
    address: "360 Throop Ave, Brooklyn, NY 11221",
    cuisine: "Venezuelan",
    description: "This family-run Venezuelan eatery serves arepas, empanadas & exotic juices in a no-frills setting."
  )

  Restaurant.create!(
    name: "El Budare Café",
    phone_number: "7188992405",
    address: "8721 Roosevelt Ave, Queens, NY 11372",
    cuisine: "Venezuelan",
    description: "Experience the bold and flavorful cuisine of Venezuela at our restaurant. From arepas to pabellón criollo, our menu is sure to delight your taste buds."
  )

  Restaurant.create!(
    name: "Emporium Brasil",
    phone_number: "2127644646",
    address: "15 W 46th St, New York, NY 10036",
    cuisine: "Brazilian",
    description: "Authentic Brazilian Cuisine. Established in 1992, Emporium Brasil was founded as a Brazilian market more than 25 years ago. It has involved into a dining destination on a stretch of West 46th Street between 5th ad 6th Avenues, which was officially named Little Brazil Street by the city in 1995. There's a taste of history in every bite of Brazil's Cuisine. Our plates are delicately prepared, and attention is given for every little detail, that's what makes the difference for our customers. Emporium's full bar features authentic Brazilian cocktails, like the traditional Caipirinha. Recommended Appetizers range from 'Aperitivo 46' to the Brazilian hors d'oeuvres made by order, which are all handmade."
  )

  Restaurant.create!(
    name: "Tamborim Bar & Grill",
    phone_number: "2014164400",
    address: "130 Newark Ave, Jersey City, NJ 07302",
    cuisine: "Brazilian",
    description: "Welcome to our Brazilian restaurant, where the atmosphere is as vibrant as the cuisine. Savor traditional dishes like feijoada and churrasco, while enjoying live music and the colorful decor inspired by the lively streets of Rio de Janeiro."
  )

  Restaurant.create!(
    name: "Petisco Brazuca",
    phone_number: "3474058905",
    address: "833 Dekalb Ave, Brooklyn, NY 11221",
    cuisine: "Brazilian",
    description: "At our Brazilian restaurant, you'll be transported to the heart of Brazil with every bite. Our menu features classic dishes like coxinha and moqueca, while our lively atmosphere and samba music create the perfect ambiance for a memorable dining experience. Come join us for a taste of Brazil."
  )

  Restaurant.create!(
    name: "Miss Favela",
    phone_number: "7182304040",
    address: "57 S 5th St, Brooklyn, NY 11249",
    cuisine: "Brazilian",
    description: "Rio de Janeiro's festive air comes to Brooklyn via traditional Brazilian cuisine & colorful decor."
  )
  Restaurant.create!(
    name: "Chavela's",
    phone_number: "7186223100",
    address: "736 Franklin Ave, Brooklyn, NY 11238",
    cuisine: "Mexican",
    description: "Old world style classic Mexican dishes, tacos, and tequila cocktails in a beautifully decorated space."
  )

  Restaurant.create!(
    name: "El Barrio Burritos",
    phone_number: "7185766611",
    address: "796A Franklin Ave, Brooklyn, NY 11238",
    cuisine: "Mexican",
    description: "Bright, cheery spot for California-style burritos, tacos & wraps, plus smoothies."
  )

  Restaurant.create!(
    name: "Citrico",
    phone_number: "3479554519",
    address: "681 Washington Ave, Brooklyn, NY 11238",
    cuisine: "Mexican",
    description: "Bright, contemporary eatery doling out Mexican fare in a narrow space with counter seating."
  )

  Restaurant.create!(
    name: "Nacho Macho Taco",
    phone_number: "7186222727",
    address: "417 Prospect Pl, Brooklyn, NY 11238",
    cuisine: "Mexican",
    description: "Down-to-earth fixture serving up a variety of tacos, enchiladas, burritos & other Mexican staples."
  )

  Restaurant.create!(
    name: "Gueros",
    phone_number: "7182304941",
    address: "605 Prospect Pl, Brooklyn, NY 11238",
    cuisine: "Mexican",
    description: "Colorful, snug storefront for margaritas & creative tacos, including popular breakfast options."
  )

  Restaurant.create!(
    name: "Maya Taqueria of Prospect Heights",
    phone_number: "7186386292",
    address: "637 Vanderbilt Ave, Brooklyn, NY 11238",
    cuisine: "Mexican",
    description: "For over a decade we’ve been proudly serving a taste of the San Francisco Mission District to the people of Brooklyn. Every meal is made-from-scratch and prepared with the freshest ingredients— never canned or frozen — creating dishes loaded with authentic west coast flavors."
  )

  Restaurant.create!(
    name: "El Cofre",
    phone_number: "7189351153",
    address: "454 Myrtle Ave, Brooklyn, NY 11205",
    cuisine: "Dominican",
    description: "Modest Dominican counter-serve offering all-day eats, including American breakfast & lunch specials."
  )

  Restaurant.create!(
    name: "El Nuevo Sabor Latino",
    phone_number: "7187889063",
    address: "620 4th Ave, Brooklyn, NY 11215",
    cuisine: "Dominican",
    description: "El Nuevo Sabor Latino is a vibrant Dominican restaurant that offers a taste of the Caribbean in every dish. With a menu featuring traditional Dominican dishes like mofongo and sancocho, each meal is made with fresh, high-quality ingredients and cooked using time-honored techniques. "
  )

  Restaurant.create!(
    name: "El Rey IV Restaurant & Billard",
    phone_number: "7182961717",
    address: "7516 Rockaway Blvd, Queens, NY 11421",
    cuisine: "Dominican",
    description: "Hello Welcome to El Rey IV Restaurant, we are a restaurant with a great diversity of services and experiences such as billiards, event venue, bar, restaurant, arcade games and much more!"
  )

  Restaurant.create!(
    name: "Mama Lupe Dominican Food",
    phone_number: "7186391495",
    address: "42-19 102nd St, Queens, NY 11368",
    cuisine: "Dominican",
    description: "From mouth-watering plantains to savory stews, Mama Lupe's menu offers a wide variety of flavorful dishes that will transport you to the heart of the Caribbean."
  )

  # Restaurant.create!(
  #   name: "Miss Favela",
  #   phone_number: "7182304040",
  #   address: "57 S 5th St, Brooklyn, NY 11249",
  #   cuisine: "Brazilian",
  #   description: "Rio de Janeiro's festive air comes to Brooklyn via traditional Brazilian cuisine & colorful decor."
  # )
  # Restaurant.create!(
  #   name: "Miss Favela",
  #   phone_number: "7182304040",
  #   address: "57 S 5th St, Brooklyn, NY 11249",
  #   cuisine: "Brazilian",
  #   description: "Rio de Janeiro's festive air comes to Brooklyn via traditional Brazilian cuisine & colorful decor."
  # )
  # Restaurant.create!(
  #   name: "Miss Favela",
  #   phone_number: "7182304040",
  #   address: "57 S 5th St, Brooklyn, NY 11249",
  #   cuisine: "Brazilian",
  #   description: "Rio de Janeiro's festive air comes to Brooklyn via traditional Brazilian cuisine & colorful decor."
  # )
  # Restaurant.create!(
  #   name: "Miss Favela",
  #   phone_number: "7182304040",
  #   address: "57 S 5th St, Brooklyn, NY 11249",
  #   cuisine: "Brazilian",
  #   description: "Rio de Janeiro's festive air comes to Brooklyn via traditional Brazilian cuisine & colorful decor."
  # )
  # Restaurant.create!(
  #   name: "Miss Favela",
  #   phone_number: "7182304040",
  #   address: "57 S 5th St, Brooklyn, NY 11249",
  #   cuisine: "Brazilian",
  #   description: "Rio de Janeiro's festive air comes to Brooklyn via traditional Brazilian cuisine & colorful decor."
  # )
  # Restaurant.create!(
  #   name: "Miss Favela",
  #   phone_number: "7182304040",
  #   address: "57 S 5th St, Brooklyn, NY 11249",
  #   cuisine: "Brazilian",
  #   description: "Rio de Janeiro's festive air comes to Brooklyn via traditional Brazilian cuisine & colorful decor."
  # )
  # Restaurant.create!(
  #   name: "Miss Favela",
  #   phone_number: "7182304040",
  #   address: "57 S 5th St, Brooklyn, NY 11249",
  #   cuisine: "Brazilian",
  #   description: "Rio de Janeiro's festive air comes to Brooklyn via traditional Brazilian cuisine & colorful decor."
  # )

  puts "Creating reviews..."
  
  Review.create!(
    rating: 5,
    user_id: 1,
    restaurant_id: 1,
    body: "This place has really nice ambience and the food was very good. Waiters could have been more attentive."
  )
  Review.create!(
    rating: 4,
    user_id: 1,
    restaurant_id: 2,
    body: "Great happy hour deals. Gets really crowded starting at 5."
  )
  Review.create!(
    rating: 3,
    user_id: 1,
    restaurant_id: 3,
    body: "This is a new location for a Brooklyn restaurant, but the food can be hit or miss"
  )
  Review.create!(
    rating: 4,
    user_id: 1,
    restaurant_id: 4,
    body: "Decent place for a burrito and a marg. Thanks Tio Pepe!"
  )
  Review.create!(
    rating: 5,
    user_id: 1,
    restaurant_id: 5,
    body: "This is a great spot if you're a wine connoisseur. Good tapas too."
  )
  Review.create!(
    rating: 5,
    user_id: 1,
    restaurant_id: 6,
    body: "Delicious churros! Best to come here at an off time like early on a weekday."
  )
  Review.create!(
    rating: 5,
    user_id: 1,
    restaurant_id: 7,
    body: "Great spot for food after going out--the only thing to note is that it's cash only and gets crowded quickly because it's pretty small"
  )
  Review.create!(
    rating: 5,
    user_id: 1,
    restaurant_id: 8,
    body: "I love Nadas! Such good empanadas and they're gluten free which is amazing"
  )
  Review.create!(
    rating: 4,
    user_id: 1,
    restaurant_id: 9,
    body: "Empanada Mama is a classic with so many options but sometimes the quality can be a little hit or miss"
  )
  Review.create!(
    rating: 5,
    user_id: 2,
    restaurant_id: 10,
    body: "The churrasco slaps."
  )
  Review.create!(
    rating: 5,
    user_id: 2,
    restaurant_id: 11,
    body: "This is a great place for special occasions. Delicious food and good portions for the price!"
  )
  Review.create!(
    rating: 4,
    user_id: 2,
    restaurant_id: 12,
    body: "What's fun about this place is how they change up the menu on the weekdays versus the weekends"
  )
  Review.create!(
    rating: 3,
    user_id: 2,
    restaurant_id: 13,
    body: "Decent spot to pick up dinner from, not the best service if you're going to sit there for eating your food"
  )
  Review.create!(
    rating: 5,
    user_id: 2,
    restaurant_id: 14,
    body: "Such a fun date night vibe! Bring your boo"
  )
  Review.create!(
    rating: 4,
    user_id: 2,
    restaurant_id: 15,
    body: "Really good mofongo and pernil. Come here if you want classics from DR and PR"
  )
  Review.create!(
    rating: 4,
    user_id: 2,
    restaurant_id: 16,
    body: "Really yummy food! The service can suffer when they get crowded"
  )
  Review.create!(
    rating: 2,
    user_id: 2,
    restaurant_id: 9,
    body: "I really was not feeling these empanadas. It took so long to get them, so I was already hangry. Major disappointment"
  )
  Review.create!(
    rating: 5,
    user_id: 2,
    restaurant_id: 2,
    body: "The tacos were indeed dummy thick. Not only were they packed with meat but the flavors were also super on point. Will definitely be coming back!"
  )
  

    puts "Done!"
end