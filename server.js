//requiring dependencies
const express = require('express');
const path = require('path');
const routes = require('./routes');

//creating an instance of express
const app = express();

//declaring the PORT
const PORT = process.env.PORT || 3001;