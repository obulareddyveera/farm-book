import { Sequelize } from "sequelize-cockroachdb";
import db from "./../config/database.js";
// Define the Account model for the "accounts" table.
const Account = db.define("accounts", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    balance: {
      type: Sequelize.INTEGER,
    },
  });

   
// Export model Product
export default Account;