import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
const server = express();
import { initDB } from "./database";
import { getListings } from "./listingsGetter";

server.use(cors());

dotenv.config();

initDB();

const app: Express = express();
const port = process.env.PORT || 3005;

app.get("/", (req: Request, res: Response) => {
  res.send("Express and TypeScript mission5 Server");
});

app.get("/listings", async (req: Request, res: Response) => {
  const listings = await getListings();
  res.send(listings);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
