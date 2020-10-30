const userDB = require('../models/user');

module.exports = {
    getAll: async function(req, res, next) {
        try {
            const list = await userDB.find({});
            res.status(200).json(list);
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
    }
}