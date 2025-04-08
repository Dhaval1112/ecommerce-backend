const store = require('../storage/memoryStore');
const generateCode = require('../utils/generateCode');

function generateDiscountCode() {
    const currentOrderCount = store.orders.length;

    console.log(currentOrderCount, store.nthOrder, "currentOrderCount, store.nthOrder :: ", (currentOrderCount + 1) % store.nthOrder, ((currentOrderCount + 1) % store.nthOrder) == 0);

    if (((currentOrderCount + 1) % store.nthOrder) == 0) {
        const code = generateCode();
        store.discountCodes.push({ code, used: false });
        return code;
    }

    return null;
}

function validateCode(code) {
    const entry = store.discountCodes.find(dc => dc.code === code && !dc.used);
    return entry || null;
}

function markCodeUsed(code) {
    const entry = store.discountCodes.find(dc => dc.code === code);
    if (entry) entry.used = true;
}

module.exports = {
    generateDiscountCode,
    validateCode,
    markCodeUsed,
};