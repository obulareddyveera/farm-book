// Import express
import express from "express";
// Import cors
import cors from "cors";
import dotenv from 'dotenv'
// Import connection
import db from "./src/config/database.js";
// Import router
import Router from "./src/routes.js";
 
const port = process.env.PORT || 3001;
dotenv.config();
// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(Router);
 
// listen on port
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));