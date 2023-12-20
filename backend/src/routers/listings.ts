import express from "express";
import { getListings } from "../listingsGetter";
import { Request, Response } from "express"
import { listing } from "../models/listings";
// import { DbSearchQuery } from "../types/listings";

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const listings = await getListings();
	res.send(listings);
});



// Route Example: /api/listings/search&location=auckland&petFriendly=1&gym=1&park=1
router.get("/search/", async (req, res) => {
	try {

		console.log("search\t")
		console.log("req.query\t", req.query)
		const { location, petFriendly, hasElevators, furnished, gym, park, supermarket, cinema, swimmingPool } = req.query

		/* WARNING TO FUTURE ME */
		/* 
			location - location can either be for CITY or for SUBURB
		*/
		type DbSearchQuery = {
			$or?: [{ city?: RegExp }, { suburb?: RegExp }];
			petFriendly?: boolean;
			hasElevators?: boolean;
			furnished?: boolean;
			// Add other search criteria as needed
		  }

		// db search query
		const dbSearchQuery: DbSearchQuery = {}
		if (location && typeof location === "string") dbSearchQuery["$or"] = [
			{city: new RegExp(location, 'i')},
			{suburb: new RegExp(location, 'i')}
		]
		if (petFriendly === "1") dbSearchQuery.petFriendly = true;
		if (hasElevators === "1") dbSearchQuery.hasElevators = true;
		if (furnished === "1") dbSearchQuery.furnished = true;


		const listings = await listing.find(dbSearchQuery)
		console.log("listings \y", listings)

		// if (gym === "1") dbSearchQuery.gym = gym;
		// if (park === "1") dbSearchQuery.park = park;
		// if (supermarket === "1") dbSearchQuery.supermarket = supermarket;
		// if (cinema === "1") dbSearchQuery.cinema = cinema;
		// if (swimmingPool === "1") dbSearchQuery.swimmingPool = swimmingPool;


		res.json(listings)
	} catch (err) {
		res.status(400).send("ERROR: " + err)
	}
})




// Route Example: /api/listings/<mongoose_id>
// Route Example: /api/listings/609c646d3b5e3f0e2c216db1
router.get("/:id", (req, res) => {
	res.json({ message: "testing" })
})


export const routerListings = express.Router().use("/listings", router)
