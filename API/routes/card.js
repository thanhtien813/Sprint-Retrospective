var express = require('express');
var router = express.Router();

const cardController = require('../controller/card');

// get all cards
router.get('/get-all', async (req, res, next) => {
    cardController.getAll(req, res, next);
});

// get based on boardId
router.get('/get-list-card', async (req, res ,next) => {
    cardController.getListCard(req, res, next);
});

// add card
router.post('/add', async (req, res, next) => {
    cardController.add(req, res, next);
});

// edit content
router.post('/edit-content', async (req, res, next) => {
    cardController.editContent(req, res, next);
});

// remove
router.post('/remove', async (req, res, next) => {
    cardController.remove(req, res, next);
})

module.exports = router;