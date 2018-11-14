require 'csv'
require 'net/ftp'

class ImportService
  HEADER_TO_COLUMN = {
    "STOCK" => :stock_number,
    "YEAR" => :year,
    "MAKE" => :make,
    "MODEL" => :model,
    "VIN" => :vin,
    "Mileage" => :mileage,
    "New/Used" => nil,
    "CYLINDER" => :engine,
    "Vehicle Style" => :body_type,
    "Drive Train" => :drive_train,
    "Engine" => :engine,
    "Transmission" => :transmission,
    "Fuel Type" => :fuel_economy,
    "Color" => :color,
    "Color 2" => :interior_color,
    "Features" => nil,
    "Photo URLs" => nil,
    "Original Cost" => nil,
    "Certified" => nil,
    "Vehicle Type" => :body_type
  }

  class << self
    def import_test!
      puts "omg it works!"
    end

    def import!
      ftp = Net::FTP.new("68.183.99.167")

      puts 'logging in'
      ftp.login("general", "mvmdenver")

      puts 'changing dir'
      ftp.chdir("files")

      puts 'saving files'
      ftp.nlst.each do |file|
        puts "saving file: #{file}"
        ftp.getbinaryfile(file, "#{Rails.root}/inventory/#{file}")
      end

      puts 'reading the csv'
      csv_text = File.read("#{Rails.root}/inventory/test.csv")

      puts 'parsing the csv'
      csv = CSV.parse(csv_text, :headers => true)

      Listing.destroy_all

      # Temporary
      photos = Photo.all.map do |photo|
        attributes = photo.attributes
        attributes.delete("id")
        attributes
      end

      csv.each do |row|
        result =  row.each_with_object({}) do |(header, value), car_attrs|
          column = HEADER_TO_COLUMN[header]

          next unless column.present?

          car_attrs[column] = value
        end

        listing = Listing.new(result)

        listing.photos = photos.map do |attrs|
          Photo.create(attrs)
        end

        if listing.save
          puts 'holy shit'
        end
      end

      puts "DONE"
    end
  end
end