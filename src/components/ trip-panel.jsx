import React, { useState } from 'react';
import { Plus, Edit, Trash } from 'lucide-react';

export function TripPanel({ onAddNewTrip }) {
  const [trips, setTrips] = useState([
    { id: 1, name: 'Paris Getaway', destination: 'Paris', duration: '7 days', price: '$1200' },
    { id: 2, name: 'Tokyo Adventure', destination: 'Tokyo', duration: '10 days', price: '$2000' },
    { id: 3, name: 'New York City Tour', destination: 'New York', duration: '5 days', price: '$800' },
  ]);

  const handleDeleteTrip = (id) => {
    setTrips(trips.filter(trip => trip.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Trip Management</h2>
        <button
          onClick={onAddNewTrip}
          className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center"
        >
          <Plus size={20} className="mr-2" />
          Add New Trip
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-4">Trip Name</th>
              <th className="pb-4">Destination</th>
              <th className="pb-4">Duration</th>
              <th className="pb-4">Price</th>
              <th className="pb-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trips.map((trip) => (
              <tr key={trip.id} className="border-b last:border-b-0">
                <td className="py-4">{trip.name}</td>
                <td className="py-4">{trip.destination}</td>
                <td className="py-4">{trip.duration}</td>
                <td className="py-4">{trip.price}</td>
                <td className="py-4">
                  <div className="flex space-x-2">
                    <button className="text-sky-500 hover:text-sky-600">
                      <Edit size={18} />
                    </button>
                    <button 
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleDeleteTrip(trip.id)}
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

