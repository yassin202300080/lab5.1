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

const createtrip =(req,res) => {
    const {
        destinationName,
        location,
        continent,
        language,
        description,
        flightCost,
        accommodationCost,
        mealCost,
        visaCost,
        transportationCost,
        currencyCode,}=req.body;


const newTrip=
{
id:trips.length+1,
destinationName,
        location,
        continent,
        language,
        description,
        flightCost,
        accommodationCost,
        mealCost,
        visaCost,
        transportationCost,
        currencyCode,

}
trips.push(newTrip);

}

const deleteTripById=(req,res)=>{
    const id=Number(req.params.id);
    const index=trips.findIndex(t=>t.id==id);
    trips.slice(index,1);
    res.status(200).json({
        status:'success',
        message:'Trip deleted successfully'
    });
}

module.exports
{retrieveAllTrips,createTrip,deleteTripById};