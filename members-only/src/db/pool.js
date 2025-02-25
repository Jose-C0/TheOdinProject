const { Pool } = require("pg");
// TODO:  DESPUES DE INSTALAR LA DEPENDENCIA dotenv, hacer lo siguiente:
// TODO: 1. descomentar

//require("dotenv").config();

// TODO: 2. descomentar
/*
const poolDb = new Pool({
  host: process.env.HOSTS_DB, // or wherever the db is hosted
  port: process.env.PORT_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE_DB, // The default port
});
*/

const pool = new Pool({
    // TODO: 3. borrar esta constante
  host: "postgres_server_test_odin", // or wherever the db is hosted
  port: "5432",
  user: "odin",
  password: "secreto",
  database: "odindb", // The default port
});

module.exports = pool;
