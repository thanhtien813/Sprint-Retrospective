const cardDB = require('../models/card');

module.exports = {
    getAll: async function(req, res, next) {
        try {
            const list = await cardDB.find({});
            res.status(200).json(list);
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    },

    // get based on board
    getListCard: async function(req, res, next) {
        try {
            const boardId = req.query.boardId;
            if (boardId === undefined || boardId === null) {
                res.status(404).json({
                    message: "Board Id is undefined"
                });
                return;
            }
            const list = await cardDB.find({boardId: boardId});
            res.status(200).json(list);
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    }
}