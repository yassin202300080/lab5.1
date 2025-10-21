const { trips } = require('../models/Trips')
// Retrieve all trips
const retrieveAllTrips = (req, res) => {
  const allTrips = trips();
  res.status(200).json({
    status: 'success',
    message: 'Trips retrieved successfully',
    results: allTrips.length,
    data: allTrips,
  });
};


