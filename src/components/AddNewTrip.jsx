import React, { useState } from 'react';

const AddNewTrip = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">New Trip Card</h2>
        <TripCard />
        <h2 className="text-xl font-semibold mt-8 mb-4">New Trip Details Booking Form</h2>
        <TripDetailsForm />
        <h2 className="text-xl font-semibold mt-8 mb-4">Recently Visited Trip</h2>
        <RecentTripImage />
        <AddTripButton />
      </div>
    </div>
  );
};

// Trip Card Component
const TripCard = () => {
  const [trip, setTrip] = useState({
    city: '',
    country: '',
    cost: ''
  });

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        name="city"
        value={trip.city}
        onChange={handleChange}
        placeholder="City"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="country"
        value={trip.country}
        onChange={handleChange}
        placeholder="Country"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="text"
        name="cost"
        value={trip.cost}
        onChange={handleChange}
        placeholder="Trip Cost"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Select Image</button>
    </div>
  );
};

// Trip Details Form Component
const TripDetailsForm = () => {
  const [details, setDetails] = useState({
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input
        type="date"
        name="date"
        value={details.date}
        onChange={handleChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
      <textarea
        name="description"
        value={details.description}
        onChange={handleChange}
        placeholder="Description on the Trip"
        rows="4"
        className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

// Recently Visited Trip Image Component
const RecentTripImage = () => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">Select Image</button>
  );
};

// Add Trip Button Component
const AddTripButton = () => {
  return (
    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
      Add Trip
    </button>
  );
};

export default AddNewTrip;
