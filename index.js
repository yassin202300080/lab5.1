const express = require('express');
const tripRouter = require('./routes/tripRoutes.js');


const app = express();


app.use(express.json());

app.use('/trips', tripRouter);


module.exports = {
   app,

};