import mongoose from "mongoose"

// 1. Init Schema
const todoSchema = new mongoose.Schema({
	// content
	content: String,
	complete:{
		type:Boolean,
		default: false
	},
	createdBy:{
		type: mongoose.Schema.Types.ObjectId,
		ref:"User"
	},
	// Array of sub-todos
	subTodos:[
	{
		type: mongoose.Schema.Types.ObjectId,
		ref:"SubTodo"
	}
		]
},{timestamps:true})
// 2. export modal
export const Todo = mongoose.model("Todo",todoSchema);