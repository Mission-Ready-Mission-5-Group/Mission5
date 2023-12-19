import { listing } from "../models/listing";

export const listingsCmd = async () => {
  console.log("Listings from DB:");
  const listingsStock = await listing.find({});
  console.log(`Found ${listingsStock.length} listings in our DB`);
  console.log(listingsStock);
};
