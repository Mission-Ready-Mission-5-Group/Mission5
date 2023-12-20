import express from "express";
import { getListings } from "../listingsGetter";
import {Request, Response} from "express"

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
	const listings = await getListings();
	res.send(listings);
  });

// Route Example: /api/listings/search&location=auckland&gym=1&park=1
router.get("/search/", (req, res) => {
	console.log("req.query\t", req.query)
	const { location, gym, park, supermarket, cinema, swimmingPool } = req.query

	res.json({ message: "testing2" })
})

// Route Example: /api/listings/<mongoose_id>
// Route Example: /api/listings/609c646d3b5e3f0e2c216db1
router.get("/:id", (req, res) => {
	res.json({ message: "testing" })
})


export const routerListings = express.Router().use("/listings", router)
