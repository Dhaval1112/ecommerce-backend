// server.js
const app = require('./app');
const { port, env } = require('./config/config');

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running in ${env} mode on port ${port}`);
});
