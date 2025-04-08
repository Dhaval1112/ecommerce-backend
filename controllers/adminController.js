const store = require('../storage/memoryStore');
const { generateDiscountCode } = require('../services/discountService');

// This function is used to generate a discount code for the user
exports.generateCode = (req, res) => {
    const code = generateDiscountCode();
    if (!code) return res.status(200).json({ message: 'Not eligible yet for a new discount' });
    res.status(201).json({ message: 'Discount code generated', code });
};

// This function is used to get the statistics of the store
exports.getStats = (req, res) => {
    // Calculated total items, total purchase amount, total discount amount
    // and all discount codes
    const itemCount = store.orders.reduce((sum, o) => sum + o.items.length, 0);
    const totalPurchase = store.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    const totalDiscount = store.orders.reduce((sum, o) => sum + o.discountAmount, 0);
    const codes = store.discountCodes;

    // Providing the statistics in the response
    res.status(200).json({
        itemCount,
        totalPurchase: totalPurchase.toFixed(2),
        totalDiscount: totalDiscount.toFixed(2),
        totalDiscount,
        discountCodes: codes,
    });
};

// This function is used to get the statistics of the store
exports.getStoreInformation = (req, res) => {
    res.status(200).json(store);
};