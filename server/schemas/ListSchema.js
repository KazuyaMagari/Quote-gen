const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListSchema = new Schema({
    quote: String,
    author: String
})

const List = mongoose.model('List', ListSchema);
module.exports = List;