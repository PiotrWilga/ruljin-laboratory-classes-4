const express = require('express');
const { 
  getProductsView, 
  getAddProductView, 
  addNewProduct, 
  getNewProductView, 
  getProductView, 
  deleteProduct 
} = require('../controllers/productsController');

const router = express.Router();

router.get('/', getProductsView);
router.get('/add', getAddProductView);
router.post('/add', addNewProduct);
router.get('/new', getNewProductView);
router.get('/:name', getProductView);
router.delete('/:name', deleteProduct);

module.exports = router;
