export const listingsArray = [
  {
    streetAddress: "5 Lagoon Way",
    suburb: "West Harbour",
    city: "Auckland",
    bedrooms: 3,
    bathrooms: 1,
    garages: 1,
    hasNegotiablePrice: true,
    price: 700, // Example price in NZD
    description:
      "Welcome to this stunning, brand new 3-bedroom home in the heart of WestHarbour! Located within walking distance of Marina View and West Harbour schools, this modern and spacious residence offers everything your family desires. You get to enjoy the large back lawn with majestic views.Renovated and airy. Handy to all public transport, cafes and shops.Also a garden shed to use.Rental price includes lawns, gardens and water usage.It is an ideal residence for both students and working professionals.",
    estateAgent: "609c646d3b5e3f0e2c216db1", // Example ObjectId for estate agent
    propertyImages: [
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/921/original/west_10.jpeg?1703116264",
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/930/original/west_5.jpeg?1703116492",
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/925/original/westharbour_1_.jpeg?1703116308",
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/923/original/west_8.jpeg?1703116286",
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/922/original/west_9.jpeg?1703116276",
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/926/original/west_6.jpeg?1703116327",
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/927/original/west_3.jpeg?1703116349",
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/928/original/west_4.jpeg?1703116406",
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/107/929/original/west_7.jpeg?1703116435",
    ],
    tenancyType: "fixed",
    availableFrom: new Date("2023-12-31"), // Example
    hasElevators: true,
    petFriendly: true,
    furnished: true,
    lattitude: -36.81416,
    longitude: 174.63639,
  },
  {
    streetAddress: "456 Oak Avenue",
    suburb: "New Suburb",
    city: "Auckland",
    bedrooms: 4,
    bathrooms: 4,
    garages: 4,
    hasNegotiablePrice: false,
    price: 750000, // Example price in NZD
    description: "A spacious family home with a beautiful garden!",
    estateAgent: "609c646d3b5e3f0e2c216db2", // Example ObjectId for another estate agent
    propertyImages: [
      "/api/media/image4.jpg",
      "/api/media/image5.jpg",
      "/api/media/image6.jpg",
    ],
    tenancyType: "fixed",
    availableFrom: new Date("2023-11-15"), // Example availability date
    hasElevators: false,
    petFriendly: true,
    furnished: true,
    lattitude: -36.8625,
    longitude: 174.7594,
  },
  {
    streetAddress: "789 Pine Street",
    suburb: "Wellington Central",
    city: "Wellington",
    bedrooms: 1,
    bathrooms: 1,
    garages: 1,
    hasNegotiablePrice: true,
    price: 600000, // Example price in NZD
    description: "A cozy apartment with a view of Wellington Harbor!",
    estateAgent: "609c646d3b5e3f0e2c216db3", // Example ObjectId for a Wellington estate agent
    propertyImages: [
      "/api/media/image7.jpg",
      "/api/media/image8.jpg",
      "/api/media/image9.jpg",
    ],
    tenancyType: "fixed",
    availableFrom: new Date("2023-10-01"), // Example availability date
    hasElevators: false,
    petFriendly: false,
    furnished: false,
    lattitude: -41.2866,
    longitude: 174.7756,
  },
];
