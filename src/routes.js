// Import express
import express from "express";
// Import Product Controller
import { 
    getAccounts,
 } from "./controllers/account.js";
 
 // Init express router
const router = express.Router();
 
// Route get all products
router.get('/accounts', getAccounts);
// export router
export default router;