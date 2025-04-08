const store = require('../storage/memoryStore');

exports.addToCart = (req, res) => {
    const { userId, item, price, quantity } = req.body;

    if (!userId || !item || !price || !quantity) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const cart = store.carts.get(userId) || [];
    cart.push({ item, price, quantity });
    store.carts.set(userId, cart);

    res.json({ message: 'Item added to cart', cart });
};