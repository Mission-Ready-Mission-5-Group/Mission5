import mongoose from "mongoose";

export const initDB = () =>
  mongoose.connect("mongodb://listing-db:27017/missionfive");
