class Quiz < ApplicationRecord
  has_many :categories
  has_many :questions
end
