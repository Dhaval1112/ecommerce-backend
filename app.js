const express = require('express');
config = require('./config/config');
const app = express();

// Routes
const cartRoutes = require('./routes/cartRoutes');
const adminRoutes = require('./routes/adminRoutes');

app.use(express.json());

// Mount routes
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);

// Not found handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});