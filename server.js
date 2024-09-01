const express = require('express');
const app = express();
const port = 3000;

// Import routes
const apiRoutes = require('./routes/index');
const clientRoutes = require('./routes/clienrt');

// Use the routes
app.use('/api', apiRoutes);
app.use('/', clientRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
