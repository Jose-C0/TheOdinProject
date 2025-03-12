const pool = require("./pool.js");

async function getAllTable(table) {
  const { rows } = await pool.query(`SELECT * FROM ${table};`);
  return rows;
}

async function getAllmsg() {
  const { rows } = await pool.query(
    `SELECT u.username, m.date, m.description, m.title FROM logs_messages m INNER JOIN users u ON u.id = m.user_id;`
  );
  return rows;
}

async function getSecretCode(username) {
  const { rows } = await pool.query(
    `SELECT username FROM users WHERE username = '${username}';`
  );
  // console.log(rows);

  return rows.map((x) => x.username).toString();
}

async function updateStatusMember(id, secretCode) {
  const { rows } = await pool.query(
    `UPDATE users 
     SET is_member = true
     WHERE id = '${id}' AND username = '${secretCode}';`
  );
  
  return rows;
}

async function insertMsg (id, title, description) {
  const { rows } = await pool.query(
    "insert into logs_messages (user_id, title, description) values ($1, $2, $3)",
    [id, title, description]
  );
  
  return rows;
}

module.exports = {
  getAllTable,
  getAllmsg,
  getSecretCode,
  updateStatusMember,
  insertMsg,
};
