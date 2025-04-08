// app.js
const express = require('express');
const connectDB = require('./config/db');
const config = require('./config/config');

// Initialize app and connect DB
connectDB();
const app = express();

// Middlewares
app.use(express.json());

module.exports = app;
