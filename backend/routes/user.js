const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const userCtrl = require('../controllers/user');

// Initialisation des routes à partir du Routeur d'Express :
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/form', multer, userCtrl.form);

router.get('/getUser/:userId', userCtrl.getUser);

module.exports = router;