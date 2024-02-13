const express = require('express');
const router = express.Router();
const { getSingleProduct,getAllProducts, addSingleProduct, updateProduct, deleteProduct } = require('../controllers/productController')

router.get('/products', getAllProducts);
router.get('/products/:id', getSingleProduct);
router.post('/products', addSingleProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

module.exports = router;