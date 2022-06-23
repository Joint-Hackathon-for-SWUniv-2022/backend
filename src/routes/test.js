const express = require('express');

const testController = require('../controllers/testController');
const { isLoggedIn } = require('../middlewares/auth');

const router = express.Router();

router.post('/mark/:problemId', isLoggedIn, testController.markProblem);
router.get('/:problemNumber', testController.getProblem);

module.exports = router;