export const listingsArray = [
	{
		streetAddress: '123 Main Street',
		suburb: 'Parnell',
		city: 'Auckland',
		bedrooms: 1,
		bathrooms: 2,
		garages: 3,
		hasNegotiablePrice: true,
		price: 500000, // Example price in NZD
		description: 'A beautiful property for sale in Auckland!',
		estateAgent: '609c646d3b5e3f0e2c216db1', // Example ObjectId for estate agent
		propertyImages: ['/src/assets/houses/house1.jpg', '/src/assets/houses/house1.jpg', '/src/assets/houses/house1.jpg'],
		tenancyType: "fixed",
		availableFrom: new Date('2023-12-31'), // Example 
		hasElevators: true,
		petFriendly: true,
		furnished: true,
		lattitude: -36.8485,
		longitude: 174.7633,
	},
	{
		streetAddress: '456 Oak Avenue',
		suburb: 'Newmarket',
		city: 'Auckland',
		bedrooms: 4,
		bathrooms: 4,
		garages: 4,
		hasNegotiablePrice: false,
		price: 750000, // Example price in NZD
		description: 'A spacious family home with a beautiful garden!',
		estateAgent: '609c646d3b5e3f0e2c216db2', // Example ObjectId for another estate agent
		propertyImages: ['/src/assets/houses/house2.jpg', '/src/assets/houses/house2.jpg', '/src/assets/houses/house2.jpg'],
		tenancyType: "fixed",
		availableFrom: new Date('2023-11-15'), // Example availability date
		hasElevators: false,
		petFriendly: true,
		furnished: true,
		lattitude: -36.8625,
		longitude: 174.7594,
	},
	{
		streetAddress: '789 Pine Street',
		suburb: 'Brooklyn',
		city: 'Wellington',
		bedrooms: 1,
		bathrooms: 1,
		garages: 1,
		hasNegotiablePrice: true,
		price: 600000, // Example price in NZD
		description: 'A cozy apartment with a view of Wellington Harbor!',
		estateAgent: '609c646d3b5e3f0e2c216db3', // Example ObjectId for a Wellington estate agent
		propertyImages: ['/src/assets/houses/house3.jpg', '/src/assets/houses/house3.jpg', '/src/assets/houses/house3.jpg'],
		tenancyType: "fixed",
		availableFrom: new Date('2023-10-01'), // Example availability date
		hasElevators: false,
		petFriendly: false,
		furnished: false,
		lattitude: -41.2866,
		longitude: 174.7756,
	}
]