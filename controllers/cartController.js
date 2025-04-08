const store = require('../storage/memoryStore');

exports.addToCart = (req, res) => {
    const { userId, item, price, quantity } = req.body;

    if (!userId || !item || !price || !quantity) {
        return res.status(400).json({ error: 'Missing fields' });
    }

    const cart = store.carts.get(userId) || [];
    cart.push({ item, price, quantity });
    store.carts.set(userId, cart);

    // Todo need to check that how to print it in json format
    console.log("store.carts :: ", store.carts, JSON.stringify(store.carts));
    res.status(200).json({ message: 'Item added to cart', cart });
};