# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Contractor.destroy_all
Project.destroy_all 

scrapper = Contractor.create!(name: "Scrapper General Building Contractors", contact: 2547000000, overview: "Registered in Kenya as a limited liability company dealing in civil and water works", password: "11111")
don = Contractor.create!(name: "Don constructors", contact: 2547111111, overview: "Offers full spectrum of building construction and we are recognized as a specialist in utilizing current technology in the markets", password: "22222")
harris = Contractor.create!(name: "The Harris Solutions", contact: 2547222222, overview: "A strong foundation for diversified General Construction Work, Renovations of Buildings, and Supplies of Construction materials", password: "33333")


Project.create!(title: "Rental Apartment", image_url: "https://images.unsplash.com/photo-1594258068036-b05b9989317a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", description: "A ten storey rental building construction in progress, with modern attributes.", duration: "4 years", contractor_id: scrapper.id)
Project.create!(title: "Water system", image_url: "https://images.unsplash.com/photo-1576859029077-b000acd37963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", description: "An implemented water and sewer system", duration: "2 weeks", contractor_id: scrapper.id)
Project.create!(title: "A Bungalow", image_url: "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80", description: "Wooden made bungalow at Nanyuki suburbian area.", duration: "3 years", contractor_id: don.id)
Project.create!(title: "Barn", image_url: "https://images.unsplash.com/photo-1618944776783-0b8646a7710a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80", description: "A renovated barn with a rolling gate design among other designs.", duration: "8 months", contractor_id: harris.id)
Project.create!(title: "Kitchen", image_url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80", description: "A renovated kitchen's interior design.", duration: "6 months", contractor_id: harris.id)
