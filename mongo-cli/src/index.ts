import { program } from "commander";
import { seedCmd } from "./commands/seedCmd";
import { listingsCmd } from "./commands/listingsCmd";
import { initDB } from "./database";

console.log("MongoDB CLI");

initDB();

program.version("1.0.0").description("A CLI tool to seed data into MongoDB.");

program
  .command("listings")
  .description("show listings from MongoDB")
  .action(listingsCmd);

program
  .command("seed")
  .description("seed all data into MongoDB")
  .action(seedCmd);

program.parse();
