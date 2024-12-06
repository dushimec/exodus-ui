import React, { useState } from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';
import backgroundVideo from "../IMAGE/Back.mp4"; // Import the background video

const BookingCard = ({ booking }) => {
  const statusColors = {
    approved: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    canceled: 'bg-red-100 text-red-800'
  };

  const StatusIcon = {
    approved: CheckCircle,
    pending: Clock,
    canceled: XCircle
  };

  const Icon = StatusIcon[booking.status];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 sm:p-6 lg:p-8 xl:p-10">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg sm:text-xl font-semibold">{booking.destination}</h3>
        <span className={`px-2 py-1 rounded-full text-sm ${statusColors[booking.status]}`}>
          <Icon className="inline-block w-4 h-4 mr-1" />
          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
        </span>
      </div>
      <p className="text-gray-600 mb-2">Date: {booking.date}</p>
      <p className="text-gray-600 mb-2">Guests: {booking.guests}</p>
      <p className="font-semibold">Total: ${booking.total}</p>
    </div>
  );
};

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState('all');

  const bookings = [
    { id: 1, destination: 'Paris', date: '2024-06-15', guests: 2, total: 1500, status: 'approved' },
    { id: 2, destination: 'Tokyo', date: '2024-07-20', guests: 1, total: 2000, status: 'pending' },
    { id: 3, destination: 'New York', date: '2024-08-10', guests: 3, total: 2500, status: 'canceled' },
    { id: 4, destination: 'Rome', date: '2024-09-05', guests: 2, total: 1800, status: 'approved' },
    { id: 5, destination: 'Bali', date: '2024-10-15', guests: 2, total: 2200, status: 'pending' },
  ];

  const filteredBookings = activeTab === 'all'
    ? bookings
    : bookings.filter(booking => booking.status === activeTab);

  return (
    <div className="relative min-h-screen">
      {/* Video background */}
      <video
        src={backgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      ></video>

      {/* Content wrapper */}
      <div className='p-11'>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <header className="flex justify-between items-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary">My Bookings</h1>
          </header>
          <nav className="mb-6">
  <ul className="flex flex-wrap justify-center lg:flex-row sm:flex-col sm:items-start sm:border-b sm:border-primary/30">
    {['all', 'approved', 'pending', 'canceled'].map((tab) => (
      <li key={tab} className="w-full sm:w-auto">
        <button
          className={`px-4 py-2 font-semibold w-full text-center sm:text-left ${activeTab === tab
            ? 'text-primary border-b-2 border-primary'
            : 'text-primary/60 hover:text-primary'}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      </li>
    ))}
  </ul>
</nav>


          <main>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
              {activeTab === 'all'
                ? 'All Bookings'
                : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Bookings`}
            </h2>
            {filteredBookings.length > 0 ? (
              filteredBookings.map(booking => (
                <BookingCard key={booking.id} booking={booking} />
              ))
            ) : (
              <p className="text-gray-600">No bookings found.</p>
            )}
          </main>
        </div>
      </div>
      </div>
    </div>
  );
}
