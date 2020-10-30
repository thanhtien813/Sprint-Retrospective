var express = require('express');
var router = express.Router();

const cardController = require('../controller/card');

// get all cards
router.get('/get-all', async function(req, res, next) {
    cardController.getAll(req, res, next);
});

// get based on boardId
router.get('/get-list-card', async function(req, res ,next) {
    cardController.getListCard(req, res, next);
});

module.exports = router;