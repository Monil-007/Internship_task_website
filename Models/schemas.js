const mongoose = require('mongoose');

const CryptoSchema = new mongoose.Schema({
    platform: String,
    lastTraded: String,
    buySellPrice: String,
    Difference: String,
    Savings: String,
})

module.exports = mongoose.model('Crypt', CryptoSchema);