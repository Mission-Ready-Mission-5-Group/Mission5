import express from "express";
import { getListings } from "../listingsGetter";
import {Request, Response} from "express"
import { listing } from "../models/listings";

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const listings = await getListings();
	res.send(listings);
  });

// Route Example: /api/listings/search&city=auckland&petFriendly=1&gym=1&park=1
router.get("/search/", async (req, res) => {
	try{

		console.log("req.query\t", req.query)
		const { city, petFriendly, hasElevators, furnished, gym, park, supermarket, cinema, swimmingPool } = req.query

		
		// const searchQuery = {
		// 	city: searchQuery.city || 
		// };
		// if (city) searchQuery.city = location;
		// if (gym) searchQuery.gym = gym;
		// if (park) searchQuery.park = park;
		// if (supermarket) searchQuery.supermarket = supermarket;
		// if (cinema) searchQuery.cinema = cinema;
		// if (swimmingPool) searchQuery.swimmingPool = swimmingPool;
	
		
		const listings = await listing.find({city:/auckland/i})
		console.log("listings \y",listings)
		// Check if the above queryParams exists, and if they do exist search `listingSchema` for properties
		// listingSchema
	
		res.json({ message: "testing2" })
	}catch(err){
		res.status(400).send("ERROR: "+err)
	}
})

// Route Example: /api/listings/<mongoose_id>
// Route Example: /api/listings/609c646d3b5e3f0e2c216db1
router.get("/:id", (req, res) => {
	res.json({ message: "testing" })
})


export const routerListings = express.Router().use("/listings", router)
