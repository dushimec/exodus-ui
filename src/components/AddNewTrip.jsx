
import { useState } from 'react'
import { CalendarIcon, ChevronDownIcon } from 'lucide-react'

export default function AddNewTrip() {
  const [title, setTitle] = useState('')
  const [destination, setDestination] = useState('')
  const [tripCost, setTripCost] = useState('')
  const [currency, setCurrency] = useState('USD')
  const [bookingDate, setBookingDate] = useState('')
  const [description, setDescription] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ title, destination, tripCost, currency, bookingDate, description, selectedImage })
    setTitle('')
    setDestination('')
    setTripCost('')
    setCurrency('USD')
    setBookingDate('')
    setDescription('')
    setSelectedImage(null)
  }

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
          <div className="relative flex-grow">
            <input
              type="number"
              placeholder="Trip Cost"
              value={tripCost}
              onChange={(e) => setTripCost(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="appearance-none w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="USD">USD</option>
              <option value="RWF">RWF</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
        <div>
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
        </div>

        <h2 className="text-xl font-bold mt-8 mb-4">New Trip Details Booking Form</h2>
        <div className="relative">
          <input
            type="date"
            placeholder="Booking Date"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 cursor-pointer focus:ring-blue-500"
          />
     
        </div>
        <textarea
          placeholder="Description on the Trip"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add Trip
        </button>
      </form>
    </div>
  )
}

