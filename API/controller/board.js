const boardDB = require('../models/board');

module.exports = {
    getAll: async function(req, res, next) {
        try {
            const list = await boardDB.find({});
            res.status(200).json(list);
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    },

    // get based on userId
    getListBoard: async function(req, res, next) {
        try {
            const userId = req.query.userId;
            if (userId === undefined || userId === null) {
                res.status(404).json({
                    message: "User Id is undefined"
                });
                return;
            }
            const list = await boardDB.find({userId: userId});
            res.status(200).json(list);
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    }
}