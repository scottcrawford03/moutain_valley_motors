require 'csv'

class ImportService
  HEADER_TO_COLUMN = {
    "Stock #" => :stock_number,
    "Vehicle Year" => :year,
    "Vehicle Make" => :make,
    "Vehicle Model" => :model,
    "Vehicle VIN" => :vin,
    "Mileage" => :mileage,
    "New/Used" => nil,
    "Cylinders" => :engine,
    "Vehicle Color" => :color,
    "Vehicle Color 2" => nil,
    "Vehicle Features" => nil,
    "Internet Price" => nil,
    "Vehicle Style" => :body_type,
    "Drive Train" => :drive_train,
    "Engine" => :engine,
    "Transmission" => :transmission,
    "Fuel Type" => :fuel_economy
  }
  
  class << self
    def import!
      csv_text = File.read("./lib/dummy_data/test_csv.csv")
      csv = CSV.parse(csv_text, :headers => true)
      csv.each do |row|
        result =  row.each_with_object({}) do |(header, value), car_attrs|
          column = HEADER_TO_COLUMN[header]
          next unless column.present?

          car_attrs[column] = value
        end

        Listing.first.update_attributes!(result)
      end

      puts Listing.first
    end
  end
end