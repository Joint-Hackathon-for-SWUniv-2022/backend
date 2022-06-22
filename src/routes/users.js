const express = require('express');

const { isLoggedIn } = require('../middlewares/auth');

const userController = require('../controllers/userController');

const router = express.Router();

router.get('/me', isLoggedIn, userController.me);

module.exports = router;