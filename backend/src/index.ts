import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { initDB } from "./database";
import { getListings } from "./listingsGetter";

dotenv.config();

initDB();

const app: Express = express();
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.send("Express and TypeScript mission5 Server");
});

app.get("/api/listings", async (req: Request, res: Response) => {
  const listings = await getListings();
  res.send(listings);
});

const port = process.env.PORT || 3005;
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
