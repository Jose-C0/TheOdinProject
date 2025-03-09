const pool = require("./pool.js");

async function getAllTable(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table};`);
  return rows;
}

async function getAllmsg(table) {
  const { rows } = await pool.query(
    `SELECT u.username, m.date, m.description, m.title FROM logs_messages m INNER JOIN users u ON u.id = m.user_id;`
  );
  return rows;
}



module.exports = { getAllTable, getAllmsg };
