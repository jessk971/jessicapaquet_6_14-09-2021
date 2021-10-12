const express = require('express');
const router = express.Router();
const Sauce = require('../models/sauce');
const auth = require('../middleware/auth'); // middleware qui permet d'authentifier les pages de l'application
const multer = require('../middleware/multer-config'); // middleware qui définit la destination et le nom de fichier des images

const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.getAllSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);



module.exports = router;