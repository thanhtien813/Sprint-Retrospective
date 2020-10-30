const mongoose = require('mongoose');

mongoose.connect(process.env.URI, {useUnifiedTopology: true, useNewUrlParser: true});

const cardSchema = new mongoose.Schema({
    content: String,
    boardId: String,
    userId: String,
    type: Number,
    createdTime: Date
}, {collection: 'card'});

module.exports = mongoose.model('card', cardSchema);