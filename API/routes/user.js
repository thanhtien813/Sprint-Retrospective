const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

const userController = require('../controller/user');

// get all users
router.get('/get-all', async function(req, res, next) {
    userController.getAll(req, res, next);
});

// user signup
router.post(
    '/signup',
    passport.authenticate('signup', { session: false }),
    async (req, res, next) => {
        res.json({
            message: 'Signup successful',
            user: req.user
        });
    }
  );

// user login
router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occurred');
                return next(error);
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);
                
                const body = { _id: user._id, username: user.username };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');

                return res.json({token});
            })
        } catch (e) {
            return next(e);
        }
    })(req, res, next);
})

module.exports = router;