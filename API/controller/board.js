const { use } = require('passport');
const boardDB = require('../models/board');

module.exports = {
    getAll: async (req, res, next) => {
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
    getListBoard: async (req, res, next) => {
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
    },

    createBoard: async (req, res, next) => {
        try {
            const boardInfo = req.body;
            const createdTime = new Date();
            const userId = req.user[0]._id;

            const newBoard = new boardDB({
                title: boardInfo.title,
                description: boardInfo.description,
                userId: userId,
                createdTime: createdTime
            });

            await newBoard.save();
            res.status(200).json({
                boardId: newBoard._id,
                message: 'Successful'
            });
        } catch (e) {
            res.status(404).json({
                message: e.message
            })
        }
    },

    removeBoard: async (req, res, next) => {
        try {
            const boardId = req.body.boardId;
            if (boardId === undefined) {
                res.status(404).json({
                    message: 'Board Id is undefined'
                });
                return;
            }

            await boardDB.findOneAndDelete({_id: boardId});
            res.status(200).json({
                message: 'Successful'
            });
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    },

    renameBoard: async (req, res, next) => {
        try {
            const boardId = req.body.boardId;
            if (boardId === undefined) {
                res.status(404).json({
                    message: 'Board Id is undefined'
                });
            }

            const board = await boardDB.findById(boardId);
            board.title = req.body.newTitle;
            board.description = req.body.newDescription;

            await board.save();
            res.status(200).json({
                boardId: board._id,
                message: 'Successful'
            });
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    }
}