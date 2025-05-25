import dotenv from "dotenv";
import connectDB from "./db/index.js";

// Using experimental module import of Dotenv
dotenv.config({
    path: './env'
})

// Function to connect Database
connectDB();