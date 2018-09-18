# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

listing = Listing.create(
  stock_number: "abc123",
  vin: "vin#",
  make: "Ford",
  model: "F-150",
  trim: "Raptor",
  fuel: "Gasoline",
  engine: "Twin Turbo 3.5L Ecoboost",
  transmission: "Automatic",
  drive_train: "4x4",
  body_type: "Truck",
  color: "Black",
  interior_color: "Black",
  interior_type: "Leather",
  fuel_economy: "18 highway/16 city",
  sold: false,
  year: "2018",
  mileage: "2800 miles"
)

5.times do
  listing.photos.create(
    image_url: "https://mountainvalleymotors.nyc3.digitaloceanspaces.com/abc123-ford-f150-raptor/front.jpg",
    position: 0
  )
end