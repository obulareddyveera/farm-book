// import sequelize
import { Sequelize } from "sequelize-cockroachdb";
import dotenv from 'dotenv'

// Connect to CockroachDB through Sequelize.
dotenv.config();
const connectionString = process.env.DATABASE_URL
const db = new Sequelize(connectionString, {
  dialectOptions: {
    application_name: "docs_simplecrud_node-sequelize"
  }
});
// export connection
export default db;