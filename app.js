const express = require('express');
const route = require('./routes/converterRoute')

const app = express();

app.use(express.json());
app.use('/User',route);

module.exports = app;



