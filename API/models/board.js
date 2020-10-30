const mongoose = require('mongoose');

mongoose.connect(process.env.URI, {useUnifiedTopology: true, useNewUrlParser: true});

const boardSchema = new mongoose.Schema({
    title: String,
    description: String,
    userId: String
}, {collection: 'board'});

module.exports = mongoose.model('board', boardSchema);