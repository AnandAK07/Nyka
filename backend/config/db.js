const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('MongoDB is failer');
    }
}

// anand07991
module.exports = connection