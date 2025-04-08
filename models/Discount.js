const mongoose = require('mongoose');

// Discount schema with usage tracking
const discountSchema = new mongoose.Schema({
    code: { type: String, unique: true },
    used: { type: Boolean, default: false },
    orderNumber: Number,
    amount: Number
});

module.exports = mongoose.model('Discount', discountSchema);
