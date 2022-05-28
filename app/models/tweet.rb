class Tweet < ApplicationRecord
  belongs_to :user

  validates :user, presence: true
  validates :message, length: { maximum: 140 }

  has_one_attached :image
end
