class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :stock_number
      t.string :vin
      t.string :make
      t.string :model
      t.string :trim
      t.string :fuel
      t.string :engine
      t.string :transmission
      t.string :drive_train
      t.string :body_type
      t.string :color
      t.string :interior_color
      t.string :interior_type
      t.string :fuel_economy
      t.boolean :sold
      t.string :year
      t.string :mileage
    end
  end
end
