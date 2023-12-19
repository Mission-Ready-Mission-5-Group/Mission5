import { listingsArray } from "../listingsStock";
import { listing } from "../models/listing";

export const seedCmd = async () => {
  console.log("Seeding listings");
  const result = await listing.insertMany(listingsArray);
  console.log(result);
};
