const config = require("../config/config");

module.exports = {
    carts: new Map(), // key: userId, value: [{ item, price, quantity }]
    orders: [

    ],
    discountCodes: [],
    usedDiscountCodes: new Set(),
    // This will be nth order based on which discount code will be generated
    nthOrder: config.discountEveryNthOrder || 5,
};