const mongoose = require('mongoose');
const dotenv = require('dotenv');
const config = require('./config');

dotenv.config();

//  Connects to MongoDB using URI from environment variables

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
