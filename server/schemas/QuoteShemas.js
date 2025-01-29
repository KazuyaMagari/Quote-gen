const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuoteSchema = new Schema({
    quote: String,
    author: String
})

const Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;
