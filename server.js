//requiring dependencies
const express = require('express');
const path = require('path');
const routes = require('./routes');

//creating an instance of express
const app = express();

//declaring the PORT
const PORT = process.env.PORT || 3001;

//middleware to parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

//middleware to use routes
app.use(routes);

//starts the server once run (using node server.js)
app.listen(PORT, () => {
    console.log('server running at http://localhost:' + PORT)
})