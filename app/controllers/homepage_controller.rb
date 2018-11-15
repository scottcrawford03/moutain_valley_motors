class HomepageController < ApplicationController
  def index
    featured_photos = Photo.where(position: 0).pluck(:image_url)
    @featured_photos = { data: featured_photos }
  end
end
