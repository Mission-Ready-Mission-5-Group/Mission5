import { facilities } from "../factilitesStock";
import { listingsArray } from "../listingsStock";
import { facility } from "../models/facility";
import { listing } from "../models/listing";

export const dropCmd = async () => {
  console.log("Drop ALL data");
  console.log(await listing.deleteMany())
  console.log(await facility.deleteMany());
};
