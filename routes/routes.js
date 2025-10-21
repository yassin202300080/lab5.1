// TripRoutes.js

const express = require('express');
const router = express.Router();

// NOTE: You will need to create and export a 'retrieveAllTrips' function 
// inside a file located at '../controllers/TripController.js'
const {
   retrieveAllTrips
} = require('../controllers/TripController.js');

const tripRouter = express.Router();

// Route for all trips
tripRouter.route('/')
   .get(retrieveAllTrips); // This line calls the function

module.exports = tripRouter;