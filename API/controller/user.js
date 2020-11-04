const userDB = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            const list = await userDB.find({});
            res.status(200).json(list);
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    },

    updateProfile: async (req, res, next) => {
        try {
            const id = req.user[0]._id;
            if (id === undefined) {
                res.status(404).json({
                    message: 'User Id is undefined'
                });
                return;
            }

            const user = await userDB.findById(id);
            user.fullName = req.body.fullName;
            user.email = req.body.email;

            await user.save();
            res.status(200).json({
                userId: user._id,
                message: 'Successful'
            });
        } catch (e) {
            res.status(404).json({
                message: e.message
            })
        }
    }
}