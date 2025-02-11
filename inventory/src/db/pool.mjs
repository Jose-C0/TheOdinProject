import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;
// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

const pool = new Pool({
  host: process.env.HOSTS_DB, // or wherever the db is hosted
  port: process.env.PORT_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB // The default port
});

export default pool;
/*
// Again, this should be read from an environment variable
module.exports = new Pool({
  connectionString: "postgresql://<role_name>:<role_password>@localhost:5432/top_users"
});
*/
