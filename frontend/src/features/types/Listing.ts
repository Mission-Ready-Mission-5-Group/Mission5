import { Document, Types } from 'mongoose';

export interface Listing {
  streetAddress: string;
  suburb: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  garages: number;
  hasNegotiablePrice?: boolean;
  price: number;
  description: string;
  estateAgent: Types.ObjectId;
  propertyImages: string[];
  tenancyType: 'fixed' | 'periodic';
  availableFrom: Date;
  hasElevators: boolean;
  petFriendly: boolean;
  furnished: boolean;
  lattitude: number;
  longitude: number;
}

export interface ListingDocument extends Listing, Document {}