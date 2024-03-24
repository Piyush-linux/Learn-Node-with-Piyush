import mongoose from "mongoose"

// 1. Init Schema
const userSchema = new mongoose.Schema({
	// Lv 1 : tyep
	content:{
		type: String,
		required: true,
	},
	complete:{
		type:Boolean,
		default: false
	},
},{timestamps:true})
// 2. export modal ( name, schema )
export const User = mongoose.model("User",todoSchema);