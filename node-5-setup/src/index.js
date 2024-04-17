// import dotenv from "dotenv";
import app from "./app.js"
import * as dotenv from 'dotenv';
import connectDB from "./db/index.js";
dotenv.config({
    path:"./env"
})

const PORT = process.env.PORT || 8000

connectDB()
.then(()=>{ // Once Connected print "Success" & start listening in Server
    console.log("MongoDB Connected Successfully")
    app.listen(PORT,()=>{
        console.log(`Server listening on port : ${PORT}`)
    })
}).catch((error)=>{
    console.log("+--MongoDB Connection Errro : ",error)
})