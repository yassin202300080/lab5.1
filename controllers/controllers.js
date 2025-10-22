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

const createtrip =(req,res)=> {
  const{
    id,
      destinationName,
      location,
      continent,
      language,
      description,
      flightCost,
      accommodationCost,
      mealCost80,
      visaCost50,
      transportationCost,
      currencyCode,} =req,body;
}
const newTrip={

}

