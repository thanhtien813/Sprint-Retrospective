const express = require('express');
const router = express.Router();
const userController = require('../controller/user');

router.get('/get', (req, res, next) => {
    res.status(200).json({
        message: 'Successful',
        user: req.user[0]
    });
});

router.post('/update', async (req, res, next) => {
    userController.updateProfile(req, res, next);
});

module.exports = router;