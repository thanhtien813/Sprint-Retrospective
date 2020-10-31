const { use } = require('passport');
const cardDB = require('../models/card');

module.exports = {
    getAll: async (req, res, next) => {
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
    getListCard: async (req, res, next) => {
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
    },

    add: async (req, res, next) => {
        try {
            const cardInfo = req.body;
            const createdTime = new Date();
            const userId = req.user[0]._id;

            const newCard = new cardDB({
                content: cardInfo.content,
                boardId: cardInfo.boardId,
                userId: userId,
                type: cardInfo.type,
                createdTime: createdTime
            });

            await newCard.save();
            res.status(200).json({
                cardId: newCard._id,
                message: 'Successful'
            });
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    },

    editContent: async (req, res, next) => {
        try {
            const id = req.body.cardId;
            const userId = req.user[0]._id;
            if (id === undefined) {
                res.status(404).json({
                    message: 'Card Id is undefined'
                });
                return;
            }

            const card = await cardDB.findById(id);
            card.content = req.body.content;
            card.userId = userId;

            await card.save();
            res.status(200).json({
                cardId: card._id,
                message: 'Successful'
            })
        } catch (e) {
            res.status(404).json({
                message: e.message
            })
        }
    },

    remove: async (req, res, next) => {
        try {
            const id = req.body.cardId;
            if (id === undefined) {
                res.status(404).json({
                    message: 'Card Id is undefined'
                });
                return;
            }

            await cardDB.findOneAndDelete({_id: id});
            res.status(200).json({
                message: 'Successful'
            });
        } catch (e) {
            res.status(404).json({
                message: e.message
            })
        }
    }
}