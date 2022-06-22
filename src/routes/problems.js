const express = require('express');

const problemController = require('../controllers/problemController');

const router = express.Router();

router.get('/', (req, res) => res.send("auth"));

router.post('/mark', problemController.markProblem);

module.exports = router;