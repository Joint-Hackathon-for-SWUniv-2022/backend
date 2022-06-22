const express = require('express');

const problemController = require('../controllers/problemController');
const { isLoggedIn } = require('../middlewares/auth');

const router = express.Router();

router.get('/', problemController.getProblems);
router.get('/recommend', isLoggedIn, problemController.getRecommends)
router.get('/:categoryId', problemController.getCategoryProblem);

router.post('/mark', problemController.markProblem);

module.exports = router;