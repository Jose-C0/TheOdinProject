import pool from './pool.mjs';

async function getAllTable (table) {
  const { rows } = await pool.query(`SELECT * FROM ${table};`);
  return rows;
}

async function getCountProducts () {
  const { rows } = await pool.query(
    'SELECT transaction_type AS transactions, SUM(quantity) AS total FROM inventorytransactions GROUP BY transaction_type;'
  );
  return rows;
}

async function getCountCategories () {
  const { rows } = await pool.query(
    'SELECT COUNT(category_id) FROM categories;'
  );
  return rows;
}

async function getquerySelect (table, nameField, id) {
  const { rows } = await pool.query(
    `SELECT * FROM ${table} WHERE ${nameField} = ${id}`
  );
  return rows;
}

async function getProducts () {
  const { rows } = await pool.query(`
      SELECT p.product_id, p.product_name, p.quantity_in_stock, p.unit_price, p.expiration_date, c.category_name, 
      c.description AS cat_description, s.supplier_name, s.contact_name
      FROM products p 
      INNER JOIN categories c ON p.category_id = c.category_id
      INNER JOIN suppliers s ON s.supplier_id = p.supplier_id;
      `
  );
  return rows;
}

async function querySelectItem (table, nameField, id) {
  const { rows } = await pool.query(
    `SELECT * FROM ${table} WHERE ${nameField} = ${id}`
  );
  return rows;
}

async function queryUpdateItem (bodyRequest, queryRequest) {
  const body = bodyRequest;
  const query = queryRequest;

  // Obtain the fields to update
  const fieldsToUpdate = Object.keys(body).filter(
    (field) => field !== query.nameField
  );

  // Create the string of fields to update
  const updateFields = fieldsToUpdate
    .map((field) => `${field} = $${fieldsToUpdate.indexOf(field) + 1}`)
    .join(', ');

  // Create the SQL query
  const sql = `
    UPDATE ${query.tableName}
    SET ${updateFields}
    WHERE ${query.nameField} = $${fieldsToUpdate.length + 1};
  `;

  // Create the SQL query
  const params = [...fieldsToUpdate.map((field) => body[field]), query.id];

  // Execute the query
  const { rows } = await pool.query(sql, params);

  return rows;
}

async function deleteOfDb (tableName, fieldName, id) {
  const { rows } = await pool.query(
    `DELETE FROM ${tableName} WHERE ${fieldName} = '${id}'`
  );
  return rows;
}

async function insert (tableName, fieldName, row) {
  // console.log(`\t ${tableName} \n`);
  // console.log(`\t ${fieldName} \n`);
  // console.log(`\t ${[row]} \n`);
  const { insert } = await pool.query(
    `INSERT INTO ${tableName} (${fieldName}) VALUES (${row})`
  );
  return insert;
}

async function getSearchUsernames (search) {
  const { rows } = await pool.query(
    `SELECT * FROM usernames WHERE username LIKE '%${search}%'`
  );
  console.log(rows);
  return rows;
}

export {
  getAllTable,
  getCountProducts,
  getCountCategories,
  getquerySelect,
  getProducts,
  querySelectItem,
  queryUpdateItem,
  deleteOfDb,
  insert
};
