import mongoose from "mongoose";

// Maps Schema in Mongoose
const SchemaFacility = new mongoose.Schema({
	facility: {
		type: String,
		enum: ['gym', 'park', 'supermarket', 'cinema', 'swimmingPool'],
		required: true
	},
	longitude:{
		type: Number,
		required: true
	},
	lattitude:{
		type: Number,
		required: true
	}
}, { timestamps: true, strict: "throw" })


export const facility = mongoose.model("facilities",SchemaFacility)