const store = require('../storage/memoryStore');
const { validateCode, markCodeUsed } = require('../services/discountService');
const config = require('../config/config');

exports.checkout = (req, res) => {
    const { userId, discountCode } = req.body;

    const cart = store.carts.get(userId);
    if (!cart || cart.length === 0) {
        return res.status(400).json({ error: 'Cart is empty' });
    }

    let totalAmount = 0;
    cart.forEach(i => totalAmount += i.price * i.quantity);

    let discount = 0;
    let appliedCode = null;

    if (discountCode) {
        const valid = validateCode(discountCode);
        if (!valid) return res.status(400).json({ error: 'Invalid or used discount code' });

        discount = totalAmount * config.discountPercent;
        appliedCode = discountCode;
        markCodeUsed(discountCode);
    }

    const order = {
        userId,
        items: cart,
        totalAmount,
        finalAmount: totalAmount - discount,
        discountAmount: discount,
        discountApplied: !!appliedCode,
        discountCode: appliedCode,
        date: new Date()
    };

    store.orders.push(order);
    // clear cart
    store.carts.delete(userId);

    res.status(200).json({ message: 'Order placed', order });
};