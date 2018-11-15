class Photo < ApplicationRecord
  belongs_to :listing
  default_scope { order(position: :asc) }
end