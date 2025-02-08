import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Plus } from 'lucide-react';
import { addPost } from '../slices/postSlice';

export default function AddNewTrip() {
  const [title, setTitle] = useState('');
  const [destination, setDestination] = useState('');
  const [tripCost, setTripCost] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [bookingDate, setBookingDate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]); // Define selectedImages state
  const [sites, setSites] = useState([{ name: '', tripDate: '' }]);
  const [trips, setTrips] = useState([{ title: '', content: '', price: '', tripDate: '' }]);
  const fileInputRef = useRef(null);
  
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
  
  const handleRemoveSite = (index) => {
    setSites(sites.filter((_, i) => i !== index));
  };
  
  const handleRemoveTrip = (index) => {
    setTrips(trips.filter((_, i) => i !== index));
  };
  
  // Handle file selection
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
  
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setSelectedImages([...selectedImages, file]); // Add selected file to selectedImages
    } else {
      toast.error("Please upload a valid image file");
    }
  };
  
  // Handle drag over event
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  // Handle file drop event
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
  
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setSelectedImages([...selectedImages, file]); // Add dropped file to selectedImages
    } else {
      toast.error("Please upload a valid image file");
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic form validation
    if (!title.trim() || !destination.trim() || !tripCost || !bookingDate || !description.trim()) {
      toast.error("Please fill out all required fields.");
      return;
    }
  
    if (!selectedFile) {
      toast.error("Please upload an image.");
      return;
    }
  
    // Prepare FormData
    const formData = new FormData();
    formData.append('title', title);
    formData.append('destination', destination);
    formData.append('price', tripCost);
    formData.append('currency', currency);
    formData.append('tripDate', bookingDate);
    formData.append('content', description);
    formData.append('file', selectedFile); // Append single file
  
    formData.append('sites', JSON.stringify(sites));
    formData.append('trips', JSON.stringify(trips));
  
    try {
      // Dispatch action
      await dispatch(addPost(formData)).unwrap();
      toast.success('Trip added successfully!');
  
      // Clear form fields after successful submission
      setTitle('');
      setDestination('');
      setTripCost('');
      setCurrency('USD');
      setBookingDate('');
      setDescription('');
      setSelectedFile(null);
      setSelectedImages([]); // Clear selectedImages
      setSites([{ name: '', tripDate: '' }]);
      setTrips([{ title: '', content: '', price: '', tripDate: '' }]);
    } catch (error) {
      // Enhanced error handling
      toast.error(error.response?.data?.message || error.message || "An unexpected error occurred. Please try again.");
    }
  };
  
  
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">New Trip Card</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
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

        {/* File upload */}
        <div
          className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer"
          onClick={() => fileInputRef.current.click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageSelect}
            className="hidden"
          />
          <Plus className="mx-auto mb-2" size={24} />
          <p>Upload Trip Images</p>
          <p className="text-sm text-gray-500">Drag and drop or click to select</p>
        </div>

        {/* Selected images */}
        {selectedImages.length > 0 && (
          <div className="mt-2">
            {selectedImages.map((image, index) => (
              <div key={index} className="flex items-center mb-2">
                <p className="mr-2">{image.name}</p>
                <button
                  type="button"
                  onClick={() => setSelectedImages(selectedImages.filter((_, i) => i !== index))}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Sites Section */}
        <h2 className="text-lg font-semibold">Sites</h2>
        {sites.map((site, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              placeholder="Site Name"
              value={site.name}
              onChange={(e) => handleSiteChange(index, 'name', e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="date"
              value={site.tripDate}
              onChange={(e) => handleSiteChange(index, 'tripDate', e.target.value)}
              className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => handleRemoveSite(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddSite}
          className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add Site
        </button>

        {/* Trips Section */}
        <h2 className="text-lg font-semibold">Trips</h2>
        {trips.map((trip, index) => (
          <div key={index} className="space-y-2 mb-4">
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
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-16"
            ></textarea>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Price"
                value={trip.price}
                onChange={(e) => handleTripChange(index, 'price', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                value={trip.tripDate}
                onChange={(e) => handleTripChange(index, 'tripDate', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => handleRemoveTrip(index)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddTrip}
          className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add Trip
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Trip
        </button>
      </form>

      {/* ToastContainer for Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
}
