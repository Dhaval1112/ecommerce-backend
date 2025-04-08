const mongoose = require('mongoose');

// User schema including cart and order count
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cart: [{
        itemId: String,
        name: String,
        quantity: Number,
        price: Number
    }],
    orderCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', userSchema);
