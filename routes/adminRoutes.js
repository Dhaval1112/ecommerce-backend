const express = require('express');
const router = express.Router();
const { generateCode, getStats, getStoreInformation } = require('../controllers/adminController');

// Middleware to check if the user is an admin
router.use((req, res, next) => {
    const isAdmin = req.headers.flagadmin === 'true';
    if (!isAdmin) {
        return res.status(403).json({ message: 'Access denied. (Only admin can access it)' });
    }
    next();
});

router.get('/generate-discount', generateCode);
router.get('/stats', getStats);
router.get('/store', getStoreInformation);

module.exports = router;