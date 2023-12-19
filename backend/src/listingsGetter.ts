import { listing } from "./models/listings";
export async function getListings() {
  const listings = await listing.find({});
  return listings;
}
