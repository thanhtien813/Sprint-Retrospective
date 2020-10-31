var express = require('express');
var router = express.Router();

const boardController = require('../controller/board');

// get all boards
router.get('/get-all', async (req, res, next) => {
    boardController.getAll(req, res, next);
});

// get based on userId
router.get('/get-list-board', async (req, res, next) => {
    boardController.getListBoard(req, res, next);
});

// create board
router.post('/create-board', async (req, res, next) => {
    boardController.createBoard(req, res, next);
});

// remove board
router.post('/remove-board', async (req, res, next) => {
    boardController.removeBoard(req, res, next);
});

// rename board
router.post('/rename-board', async (req, res, next) => {
    boardController.renameBoard(req, res, next);
});

module.exports = router;