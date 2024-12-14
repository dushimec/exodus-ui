import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CalendarIcon, ChevronDownIcon } from 'lucide-react';
import { createPostThunk } from '../slices/postSlice';

export default function AddNewTrip() {
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');
  const [tripCost, setTripCost] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [bookingDate, setBookingDate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [sites, setSites] = useState([{ name: '', tripDate: '' }]);
  const [trips, setTrips] = useState([{ title: '', content: '', price: '', tripDate: '' }]);

  const dispatch = useDispatch();

  const handleAddSite = () => {
    setSites([...sites, { name: '', tripDate: '' }]);
  };

  const handleAddTrip = () => {
    setTrips([...trips, { title: '', content: '', price: '', tripDate: '' }]);
  };

  const handleSiteChange = (index, field, value) => {
    const newSites = [...sites];
    newSites[index][field] = value;
    setSites(newSites);
  };

  const handleTripChange = (index, field, value) => {
    const newTrips = [...trips];
    newTrips[index][field] = value;
    setTrips(newTrips);
  };

  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('title', title);
    formData.append('destination', destination);
    formData.append('tripCost', tripCost);
    formData.append('currency', currency);
    formData.append('bookingDate', bookingDate);
    formData.append('description', description);
    if (selectedImage) {
      formData.append('image', selectedImage); // File field
    }
    formData.append('sites', JSON.stringify(sites));
    formData.append('trips', JSON.stringify(trips));

    // Dispatch the createPostThunk action with FormData
    dispatch(createPostThunk(formData));

    // Clear form fields after submission
    setTitle('');
    setDestination('');
    setTripCost('');
    setCurrency('USD');
    setBookingDate('');
    setDescription('');
    setSelectedImage(null);
    setSites([{ name: '', tripDate: '' }]);
    setTrips([{ title: '', content: '', price: '', tripDate: '' }]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">New Trip Card</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex space-x-2">
          <input
            type="number"
            placeholder="Trip Cost"
            value={tripCost}
            onChange={(e) => setTripCost(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="appearance-none w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="USD">USD</option>
            <option value="RWF">RWF</option>
          </select>
        </div>
        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
        ></textarea>
        <label htmlFor="image-upload" className="cursor-pointer">
          <div className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block hover:bg-blue-600 transition duration-300">
            Select Image
          </div>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            className="hidden"
          />
        </label>
        {selectedImage && <p className="mt-2">Selected: {selectedImage.name}</p>}

        <h2 className="text-xl font-bold mt-8 mb-4">Sites</h2>
        {sites.map((site, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              placeholder="Site Name"
              value={site.name}
              onChange={(e) => handleSiteChange(index, 'name', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              placeholder="Trip Date"
              value={site.tripDate}
              onChange={(e) => handleSiteChange(index, 'tripDate', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSite}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add More Site
        </button>

        <h2 className="text-xl font-bold mt-8 mb-4">Trips</h2>
        {trips.map((trip, index) => (
          <div key={index} className="space-y-2">
            <input
              type="text"
              placeholder="Trip Title"
              value={trip.title}
              onChange={(e) => handleTripChange(index, 'title', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Trip Content"
              value={trip.content}
              onChange={(e) => handleTripChange(index, 'content', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            ></textarea>
            <input
              type="number"
              placeholder="Price"
              value={trip.price}
              onChange={(e) => handleTripChange(index, 'price', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              placeholder="Trip Date"
              value={trip.tripDate}
              onChange={(e) => handleTripChange(index, 'tripDate', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddTrip}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add More Trip
        </button>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Trip
        </button>
      </form>
    </div>
  );
}
