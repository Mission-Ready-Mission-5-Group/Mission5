import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
});

export const listing = mongoose.model("listing", listingSchema);
