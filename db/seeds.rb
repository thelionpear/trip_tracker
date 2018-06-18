100.times do
    Trip.create(
      title: Faker::LordOfTheRings.location
    )
  end

100.times do
    Location.create(
        name: Faker::Zelda.location,
        fave_picture: Faker::LoremPixel.image("50x60")
    )
end

100.times do
    Address.create(
      street: Faker::Address.street_address,
      zip_code: Faker::Address.zip_code
    )
  end

  puts "seeded" 