require 'csv'
require 'net/ftp'

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
    def import_test!
      puts "omg it works!"
    end

    def import!
      # ftp = Net::FTP.new("68.183.99.167")
      # ftp.login("general", "mvmdenver")
      # ftp.chdir("files")
      # ftp.nlst.each do |file|
      #   ftp.getbinaryfile(file, "#{Rails.root}/inventory/#{file}")
      # end

      # csv_text = File.read("./inventory/test.csv")
      # csv = CSV.parse(csv_text, :headers => false)
      # csv.each do |row|
      #   binding.pry
      #   result =  row.each_with_object({}) do |(header, value), car_attrs|
      #     column = HEADER_TO_COLUMN[header]
      #     next unless column.present?

      #     car_attrs[column] = value
      #   end

      #   Listing.destroy_all

      #   listing = Listing.new(result)
      #   listing.photos = Photo.all

      #   if listing.save
      #     puts 'holy shit'
      #   end
      # end

      puts "DONE"
    end
  end
end