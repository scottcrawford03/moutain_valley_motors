class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :image_url
      t.integer :listing_id
      t.integer :position
    end
  end
end
