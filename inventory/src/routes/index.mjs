import express from 'express';
import * as InventoryController from '../controllers/inventoryController.mjs';

const router = express.Router();

router.get('/', InventoryController.getSummary);

router.get('/table', InventoryController.getViewTable);
router.get('/table:create', InventoryController.getViewcreate);
router.post('/table:create', InventoryController.postCreate);

router.get('/editItem', InventoryController.getViewEditItem);
router.post('/editItem', InventoryController.postViewEditItem);

router.post('/delete', InventoryController.deleteValue);

router.get('/products', InventoryController.getViewProducts);
router.get('/categories', InventoryController.getViewCategories);

// router.get('/search', UsersController.searchUsername);

// router.get('/allusers', UsersController.getViewUsers);

export default router;
