import express from "express";
import { getListings } from "../listingsGetter";
import { Request, Response } from "express";
import { listing } from "../models/listings";
// import { DbSearchQuery } from "../types/listings";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const listings = await getListings();
  res.send(listings);
});



// Route Example: /api/listings/search&location=auckland&petFriendly=1&gym=1&park=1
router.get("/search/", async (req, res) => {
	try {

		console.log("search\t")
		console.log("req.query\t", req.query)
		const { location, petFriendly, hasElevators, furnished, tags, gym, park, supermarket, cinema, swimmingPool } = req.query

		let filteredTags:string[] = []
		if (tags && typeof tags === "string"){
			filteredTags = tags.split(" ")
			console.log("tags\t",filteredTags)

			// filteredTags  eg: [ 'auck', 'well' ]
		}

		/* WARNING TO FUTURE ME */
		/* 
			location - location can either be for CITY or for SUBURB
		*/


		// $or: [
		// 	{ city: { $in: filteredTags.map(tag => new RegExp(tag, 'i')) } },
		// 	{ suburb: { $in: filteredTags.map(tag => new RegExp(tag, 'i')) } }
		//   ],



		// !@#!@#@! #@!# !@# !@# @!# !@# !@# !@#@! #!@#!@# !@ #!@ !@#!@#!@ #!@# !TURNED OFF    DbSearchQuery    TYPESAFETY FOR PRESENTATION!!!!!! !@#!@#!@#!@#!@#@!#@!#

		// type DbSearchQuery = {
		// 	$or?: [{ city?: RegExp | any }, { suburb?: RegExp| any }];
		// 	petFriendly?: boolean;
		// 	hasElevators?: boolean;
		// 	furnished?: boolean;
		// 	// Add other search criteria as needed
		//   }

		// db search query
		const dbSearchQuery:any = {}
		if (location && typeof location === "string") dbSearchQuery["$or"] = [
			{city: new RegExp(location, 'i')},
			{suburb: new RegExp(location, 'i')},
			{ suburb: { $in: filteredTags.map(tag => new RegExp(tag, 'i')) } },
			{ city: { $in: filteredTags.map(tag => new RegExp(tag, 'i')) } }
		]
		if (petFriendly === "1") dbSearchQuery.petFriendly = true;
		if (hasElevators === "1") dbSearchQuery.hasElevators = true;
		if (furnished === "1") dbSearchQuery.furnished = true;


		const listings = await listing.find(dbSearchQuery)
		





		res.json(listings)



		// GENERATED

		// const listings = await listing.find({
		// 	$or: [
		// 	  { city: { $in: filteredTags.map(tag => new RegExp(tag, 'i')) } },
		// 	  { suburb: { $in: filteredTags.map(tag => new RegExp(tag, 'i')) } },
		// 	  { city: new RegExp(location, 'i') },
		// 	  { suburb: new RegExp(location, 'i') }
		// 	],
		// 	petFriendly: petFriendly === "1",
		// 	hasElevators: hasElevators === "1",
		// 	furnished: furnished === "1",
		//   });
		//   res.json(listings)
	} catch (err) {
		res.status(400).send("ERROR: " + err)
	}
})

// Route Example: /api/listings/<mongoose_id>
// Route Example: /api/listings/609c646d3b5e3f0e2c216db1
router.get("/:id", async (req, res) => {
  const listings = await listing.findById(req.params.id);
  res.json(listings);
});

export const routerListings = express.Router().use("/listings", router);
