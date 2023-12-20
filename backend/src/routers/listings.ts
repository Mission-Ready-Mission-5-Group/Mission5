import express from "express";
import { getListings } from "../listingsGetter";
import { Request, Response } from "express";
import { listing } from "../models/listings";
import { SearchQuery } from "../types/listings";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const listings = await getListings();
  res.send(listings);
});

// Route Example: /api/listings/search&city=auckland&petFriendly=1&gym=1&park=1
router.get("/search/", async (req, res) => {
  try {
    console.log("search\t");
    console.log("req.query\t", req.query);
    const {
      city,
      petFriendly,
      hasElevators,
      furnished,
      gym,
      park,
      supermarket,
      cinema,
      swimmingPool,
    } = req.query;

    // const city = "auckland"
    const searchQuery: SearchQuery = {};
    if (city && typeof city === "string")
      searchQuery.city = new RegExp(city, "i");
    if (petFriendly === "1") searchQuery.petFriendly = true;
    if (hasElevators === "1") searchQuery.hasElevators = true;
    if (furnished === "1") searchQuery.furnished = true;

    const listings = await listing.find(searchQuery);
    console.log("listings y", listings);

    // if (gym === "1") searchQuery.gym = gym;
    // if (park === "1") searchQuery.park = park;
    // if (supermarket === "1") searchQuery.supermarket = supermarket;
    // if (cinema === "1") searchQuery.cinema = cinema;
    // if (swimmingPool === "1") searchQuery.swimmingPool = swimmingPool;

    res.json(listings);
  } catch (err) {
    res.status(400).send("ERROR: " + err);
  }
});

// Route Example: /api/listings/<mongoose_id>
// Route Example: /api/listings/609c646d3b5e3f0e2c216db1
router.get("/:id", async (req, res) => {
  const listings = await listing.findById(req.params.id);
  res.json(listings);
});

export const routerListings = express.Router().use("/listings", router);
