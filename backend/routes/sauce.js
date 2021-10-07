const express = require('express');
const router = express.Router();
const Sauce = require('../models/sauce');

const sauceCtrl = require('../controllers/sauce');

router.get('/', sauceCtrl.getAllSauces);





module.exports = router;