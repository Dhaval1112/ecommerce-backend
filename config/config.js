// config/config.js

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Determine the environment, default to development
const nodeEnv = process.env.NODE_ENV || 'development';

// Resolve path to corresponding .env file (e.g., .env.development)
const envPath = path.resolve(__dirname, `../.env.${nodeEnv}`);

// Fallback to base .env if environment-specific file not found
if (fs.existsSync(envPath)) {
    dotenv.config({ path: envPath });
} else {
    dotenv.config(); // fallback to .env
}

module.exports = {
    port: process.env.PORT || 5000,
    env: nodeEnv,
    discountEveryNthOrder: parseInt(process.env.DISCOUNT_EVERY_NTH_ORDER) || 3,
    discountPercent: parseFloat(process.env.DISCOUNT_PERCENT) || 0.1,
};