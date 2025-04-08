module.exports = {
    carts: new Map(), // key: userId, value: [{ item, price, quantity }]
    orders: [],
    discountCodes: [],
    usedDiscountCodes: new Set(),
    nthOrder: 5,
};