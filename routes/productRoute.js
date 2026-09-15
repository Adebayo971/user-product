const express = require('express');
const { uploadProduct, getAllProducts } = require('../controllers/productController.js');
const upload = require("../config/multer.js")

const router = express.Router();
router.post('/upload/:userId', upload.single("image"), uploadProduct);
router.get('/getall', getAllProducts);

module.exports = router;