import * as db from '../db/queriesInventory.mjs';

const link = [
  { home: '/' },
  { table: 'pages/editor/table' },
  { tableCrate: 'pages/editor/table:create' },
  { editItem: 'pages/editor/editItem' },
  { products: 'pages/store/products' },
  { categories: 'pages/store/categories' }
];

async function getSummary (req, res) {
  const queryCoutnCat = await db.getCountCategories();
  const querytotalItems = await db.getCountProducts();

  // console.log('totalItems:', totalItems);

  const tItemsIn = querytotalItems
    .filter((x) => x.transactions === 'IN')
    .map((x) => x.total)
    .toString();

  const tItemsOut = querytotalItems
    .filter((x) => x.transactions === 'OUT')
    .map((x) => x.total)
    .toString();

  const tCat = queryCoutnCat.map((x) => x.count).toString();

  res.render('pages/index', {
    tItemsIn,
    tItemsOut,
    tCat
  });
}

async function getViewTable (req, res) {
  try {
    const categories = await db.getAllTable(req.query.tableName);
    const rowHeader = await Object.keys(categories[0]);
    const fieldID = [];
    const fieldName = await Object.keys(categories[0])[0];

    // console.log('categories: ', categories);

    res.render('pages/editor/table', {
      categories,
      rowHeader,
      tableName: req.query.tableName,
      fieldID,
      fieldName
    });
  } catch (error) {
    res.status(500).json({ msg: 'ERROR' });
  }
}

async function getViewEditItem (req, res) {
  const query = await db.querySelectItem(
    req.query.tableName,
    req.query.nameField,
    req.query.id
  );
  const link = `?tableName=${req.query.tableName}&nameField=${req.query.nameField}&id=${req.query.id}`;
  const linkGoBack = `/table?tableName=${req.query.tableName}`;

  res.render('pages/editor/editItem', { db: query, link, linkGoBack });
}

async function getViewProducts (req, res) {
  const linkProducts = link.find((x) => x.products).products;
  const queryProducts = await db.getProducts();
  // console.log(queryProducts);

  res.render(linkProducts, { prodts: queryProducts });
}

async function getViewCategories (req, res) {
  const linkCategories = link.find((x) => x.categories).categories;
  const query = await db.getAllTable('categories');
  console.log(query);

  res.render(linkCategories, { ctgs: query });
}

async function postViewEditItem (req, res) {
  // Example of structure of req.query and req.body
  // req.query { tableName: 'categories', nameField: 'categoryid', id: '6' }
  // req.body { categoryid: '6', categoryname: 'Vegetables', description: 'Various' }
  const queryRequest = req.query;
  const bodyRequest = req.body;
  const linkGoBack = `?tableName=${req.query.tableName}`;

  await db.queryUpdateItem(bodyRequest, queryRequest);

  // eslint-disable-next-line quotes
  res.redirect(`/table${linkGoBack}`);
}

async function getViewcreate (req, res) {
  const query = req.query.rowHeader
    .split(',')
    .filter((item, index) => index !== 0);
  // console.log('query', query);
  // render the form
  const linkGoBack = `/table?tableName=${req.query.tableName}`;

  // console.log('create');
  res.render('pages/editor/new', { db: query, linkGoBack });
}

async function postCreate (req, res) {
  // The row output sting should look like this: 'item1', 'item2'
  // This is used for query insert
  const row = Object.values(req.body)
    .map((x) => `'${x}'`)
    .join(', ');
  const tableName = req.query.tableName;
  const fieldName = Object.keys(req.body).toString();
  const linkGoBack = `/table?tableName=${req.query.tableName}`;

  await db.insert(tableName, fieldName, row);

  res.redirect(linkGoBack);
}

async function deleteValue (req, res) {
  // Delete value on for input, only return list of ids
  const row =
    typeof req.body.checkname === 'object'
      ? req.body.checkname.filter((x) => x !== 'on')
      : req.body.checkname;

  // console.log('row \n\t', row);
  // console.log('req.body.checkname \n\t', req.body.checkname);

  if (typeof row === 'object') {
    await row.map((item) => {
      return db.deleteOfDb(req.query.tableName, req.query.nameField, item);
    });
  } else {
    await db.deleteOfDb(req.query.tableName, req.query.nameField, row);
  }
  res.redirect('/');
}

async function searchUsername (req, res) {
  const filterParams = req.query.username;
  // console.log("query", req.query.username)
  const search = await db.getSearchUsernames(filterParams);
  // console.log(search)
  res.render('pages/search', { search });
}

export {
  getSummary,
  getViewTable,
  getViewEditItem,
  getViewProducts,
  getViewCategories,
  postViewEditItem,
  getViewcreate,
  postCreate,
  deleteValue
};
