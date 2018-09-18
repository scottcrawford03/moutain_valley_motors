class ShopController < ApplicationController
  def index
    all_listings = []
    listings = Listing.includes(:photos).find_each do |listing|
      all_listings << {
        data: listing,
        photos: listing.photos
      }
    end
    puts all_listings
    @all_listings = all_listings
  end

  def show
    listing = Listing.includes(:photos).find_by(id: params[:id])

    if listing.nil?
      redirect_to shop_path
      return
    end

    @listing = { data: listing, photos: listing.photos }
  end
end
