import mongoose from "mongoose"

// 1. Init Schema
const userSchema = new mongoose.Schema({
	// Lv 1 : tyep
	username: String,
	// Lv2 : Validation
	email: {
		type: String,
		unique: true,
		lowercase: true
		required: true,
	},
	// Error Handeling
	password:{
		type: String,
		min:5,
		max:15,
		required: [true,"Password is Required !"],
	},
	isActive: Boolean
},{timestamps:true})
// 2. export modal ( name, schema )
export const User = mongoose.model("User",todoSchema);