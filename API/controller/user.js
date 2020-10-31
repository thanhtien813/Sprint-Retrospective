const userDB = require('../models/user');

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
            const id = req.body.userId;
            if (id === undefined) {
                res.status.json({
                    message: 'User Id is undefined'
                });
                return;
            }

            const user = await userDB.findById(id);
            for (member in req.body){
                if (member != "userId"){
                    user[member] = req.body[member];
                }
            }

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