import express from "express";
import cors from "cors";
const app = express();

// Origin Validation
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({
    limit:"16kb"
}))

// convert url from "piyush patil" to "piyush+patil"
app.use(express.urlencoded({extended:true}))

// static assets
app.use(express.static("public"))

app.use(cookieParser())

export default app;