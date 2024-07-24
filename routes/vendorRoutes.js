const express = require('express')
const vendorController = require('../controller/vendorController');


const router = express.Router();

router.post('/register',vendorController.vendorRegister);
router.post('/Login',vendorController.vendorLogin);
router.get('/all-vendors',vendorController.getAllVendors);
router.get('/single-vendor/:apple',vendorController.getVendorById);


module.exports = router;