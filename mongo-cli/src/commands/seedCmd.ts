import { facilities } from "../factilitesStock";
import { listingsArray } from "../listingsStock";
import { facility } from "../models/facility";
import { listing } from "../models/listing";

export const seedCmd = async () => {
  console.log("Seeding listings");
  console.log(await listing.insertMany(listingsArray));
  console.log(await facility.insertMany(facilities));
};
