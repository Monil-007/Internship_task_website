const mongoose = require('mongoose');

const connection_url = 'mongodb+srv://CryptoProjectUser:crypto1234@cluster0.vjyk9.mongodb.net/?retryWrites=true&w=majority';

const connectDB = () => {
    console.log("Database connect ho gaya, bolo radhekrishna !!!")
    return mongoose.connect(connection_url);
}

module.exports = connectDB;
