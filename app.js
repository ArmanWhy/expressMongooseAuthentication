import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
const app = express();
import web from "./Routes/web.js"

dotenv.config();
const PORT = process.env.PORT
const LOCALHOST = process.env.LOCALHOST 


//calling database connection string for mondogdb
const DATABASE_URI= process.env.DB_URI
connectDB(DATABASE_URI) 

//middleware for template rendering
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//base url for all controller
app.use('/user', web)  
 
//setting ejs engine
app.set("view engine", "ejs");



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`); 
});
