const mongoose = require('mongoose');

// Order schema to store purchases and discounts
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    items: [{
        itemId: String,
        name: String,
        quantity: Number,
        price: Number
    }],
    total: Number,
    discountApplied: Boolean,
    discountAmount: Number,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
