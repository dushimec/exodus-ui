"use client"

import { useState } from "react"
import { X, Check, Loader2 } from "lucide-react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function BookingModal({ isOpen, onClose, destination }) {
  const navigate = useNavigate()
  const [travelers, setTravelers] = useState(1)
  const [travelDate, setTravelDate] = useState("")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [bookingStatus, setBookingStatus] = useState("idle") // 'idle', 'loading', 'success'

  // Get the authentication status from Redux store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  // Base prices per destination (in FRW)
  const basePrices = {
    "Kibeho Holy Land": 599000,
    "Regina Pacis Cathedral": 299000,
    "Nyakibanda Seminary": 399000,
    "Western Wall": 899000,
    "Church of the Holy Sepulchre": 799000,
    "Al-Aqsa Mosque": 699000,
    "Bahá'í Gardens": 499000,
    "Sea of Galilee": 599000,
    "Great Pyramid of Giza": 999000,
    "Luxor Temple": 799000,
    "Saint Catherine's Monastery": 699000,
    "Hagia Sophia": 899000,
    Ephesus: 799000,
    Cappadocia: 699000,
  }

  const basePrice = basePrices[destination?.name] || 599000
  const total = basePrice * travelers

  const handleConfirmBooking = async () => {
    if (isAuthenticated) {
      setBookingStatus("loading")
      try {
        const response = await axios.post("/api/bookings", {
          destination: destination?.name,
          travelers,
          travelDate,
          fullName,
          email,
          phone,
          totalAmount: total,
        })

        if (response.status === 200) {
          setBookingStatus("success")
        } else {
          throw new Error("Booking failed")
        }
      } catch (error) {
        console.error("Booking failed:", error)
        setBookingStatus("idle")
      }
    } else {
      // Redirect to login page
      navigate("/login")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full flex overflow-hidden relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 z-10">
          <X className="h-6 w-6" />
        </button>

        {/* Left side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src={destination?.imageSrc || "/placeholder.svg"}
            alt={destination?.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Booking Form */}
        <div className="flex-1 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6">{destination?.name}</h2>

          <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
          <div className="text-2xl text-[#0584c7] font-bold mb-6">{basePrice.toLocaleString()} Frw per person</div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
              <input
                type="number"
                min="1"
                value={travelers}
                onChange={(e) => setTravelers(Math.max(1, Number.parseInt(e.target.value)))}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
              <input
                type="date"
                value={travelDate}
                onChange={(e) => setTravelDate(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <div className="mb-6">
            <div className="text-lg font-semibold">
              Total: <span className="text-[#0584c7]">{total.toLocaleString()} Frw</span>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mr-2" />
              <span className="text-sm text-gray-600">I agree to the terms and conditions</span>
            </label>
          </div>

          <button
            className="w-full bg-[#0584c7] text-white py-3 rounded-md hover:bg-[#046da6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={!agreed || !fullName || !email || !phone || !travelDate || bookingStatus !== "idle"}
            onClick={handleConfirmBooking}
          >
            {bookingStatus === "loading" ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : bookingStatus === "success" ? (
              <Check className="mr-2 h-4 w-4" />
            ) : null}
            {bookingStatus === "loading"
              ? "Processing..."
              : bookingStatus === "success"
                ? "Booking Confirmed"
                : "Confirm Booking"}
          </button>
          {bookingStatus === "success" && (
            <p className="mt-4 text-green-600 text-center">You have received the booking info on your email.</p>
          )}
        </div>
      </div>
    </div>
  )
}
