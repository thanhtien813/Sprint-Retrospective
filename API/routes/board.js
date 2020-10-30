var express = require('express');
var router = express.Router();

const boardController = require('../controller/board');

// get all boards
router.get('/get-all', async function(req, res, next) {
    boardController.getAll(req, res, next);
});

// get based on userId
router.get('/get-list-board', async function(req, res, next) {
    boardController.getListBoard(req, res, next);
});

module.exports = router;