export type ListingType = {
  _id: string;
  streetAddress: string;
  suburb: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  hasNegotiablePrice: boolean;
  price: number;
  description: string;
  estateAgent: number;
  propertyImages: string[];
  tenancyType: string;
  availableFrom: string;
  hasElevators: boolean;
  petFriendly: boolean;
  furnished: boolean;
  lattitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
};
