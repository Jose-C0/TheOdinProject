const { Pool } = require("pg");

require("dotenv").config();

const pool = new Pool({
  host: process.env.HOSTS_DB, // or wherever the db is hosted
  port: process.env.PORT_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB, // The default port
});

module.exports = pool;
