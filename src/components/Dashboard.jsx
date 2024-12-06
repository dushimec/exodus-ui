git

// import { Bell, Mail, Search, Settings, ChevronDown, MoreVertical } from 'lucide-react';

import picture from '../IMAGE/profile.jpg'

import React, { useState, useContext, useEffect } from "react";
import {
  Bell,
  Mail,
  Search,
  Settings,
  ChevronDown,
  MoreVertical,
} from "lucide-react";
import AddNewTrip from "./AddNewTrip"; // Ensure to import the AddNewTrip component
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import logo from '../IMAGE/logo.jpg'


export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddingTrip, setIsAddingTrip] = useState(false); // State to track if Add New Trip is active
  const [activeLink, setActiveLink] = useState("dashboard"); // State to track the active link
  const navigate = useNavigate();

  const { user, getProfile, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      getProfile();
    }
  }, [user, getProfile]);

  const handleLogout = () => {
    logout();
    navigate("/admin-login");
  };

  const stats = [
    { title: "Total Booked", value: "$24,590", change: "+12.08%" },
    { title: "30 Days Revenue", value: "$18,680", change: "+12.08%" },
    { title: "Total customers", value: "$50,680", change: "+12.08%" },
    { title: "Tour Packages", value: "$16,590", change: "+12.08%" },
  ];

  const recentBookings = [
    {
      name: "New Delhi To Dhaka",
      type: "Oneway",
      price: "50$",
      status: "Pending",
    },
    // ... other bookings
  ];

  const handleAddNewTripClick = () => {
    setIsAddingTrip(true); // Set the state to true when 'Add New Trip' is clicked
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Set the clicked link as active
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="TripManager Logo" />
            <h1 className="text-xl font-bold">Admin DashBoard</h1>
          </div>
          <div className="flex space-x-4">
            <a
              href="/dashboard"
              className={`hover:text-blue-300 transition-colors ${
                activeLink === "dashboard" ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("dashboard")}
            >
              dashboard
            </a>
            <a
              href="#"
              className={`hover:text-blue-300 transition-colors ${
                activeLink === "Trips" ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => {
                handleAddNewTripClick("Trips");
                handleLinkClick("Trips");
              }}
            >
              Trips
            </a>

            <a
              href="#"
              className={`hover:text-blue-300 transition-colors ${
                activeLink === "Users" ? "text-blue-500" : "text-gray-500"
              }`}
              onClick={() => handleLinkClick("Users")}
            >
              Users
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search ..."
                className="bg-gray-700 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search
                className="absolute right-3 top-2.5 text-gray-400"
                size={18}
              />
            </div>
            <button className="hover:text-blue-300 transition-colors">
              <Settings size={20} />
            </button>
            <button className="hover:text-blue-300 transition-colors">
              <Mail size={20} />
            </button>
            <button className="hover:text-blue-300 transition-colors">
              <Bell size={20} />
            </button>
            <div className="flex items-center space-x-2">
              <img
                src={user?.profile?.url || ""}
                alt="User Avatar"
                className="h-12 w-12 rounded-full"
              />
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto mt-8 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white rounded-lg shadow-md p-4 mr-8">
          <ul className="space-y-2">
            <li>
              <a
                href="Dashbord"
                onClick={() => handleLinkClick("dashboard")}
                className={`flex items-center space-x-2 font-semibold ${
                  activeLink === "dashboard" ? "text-blue-500" : "text-gray-500"
                }`}
              >
                <span
                  className={`p-2 rounded ${
                    activeLink === "dashboard"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </span>

                <span>dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  handleAddNewTripClick("Trips");
                  handleLinkClick("Trips");
                }}
                className={`flex items-center space-x-2 font-semibold ${
                  activeLink === "Trips" ? "text-blue-500" : "text-gray-500"
                }`}
              >
                <span
                  className={`p-2 rounded ${
                    activeLink === "Trips"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>

                <span>Add New Trip</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleLinkClick("Users")}
                className={`flex items-center space-x-2 font-semibold ${
                  activeLink === "Users" ? "text-blue-500" : "text-gray-500"
                }`}
              >
                <span
                  className={`p-2 rounded ${
                    activeLink === "Users"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-500 text-white"
                  }`}
                >
                  {/* Users icon */}
                </span>
                <span>Users</span>
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Dashboard Content */}
        <main className="flex-1">
          {isAddingTrip ? ( // Conditional rendering based on state
            <AddNewTrip />
          ) : (
            <>
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-lg shadow-md p-6 ${
                      index === 0 ? "bg-blue-500 text-blue-500" : ""
                    }`}
                  >
                    <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                    <p className="text-3xl font-bold mb-2">{stat.value}</p>
                    <p
                      className={`text-sm ${
                        index === 0 ? "text-blue-200" : "text-green-500"
                      }`}
                    >
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recent Booking</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={20} />
                  </button>
                </div>
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-2">Package Name</th>
                      <th className="pb-2">Type</th>
                      <th className="pb-2">Price</th>
                      <th className="pb-2">Status</th>
                      <th className="pb-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings.map((booking, index) => (
                      <tr key={index} className="border-b last:border-b-0">
                        <td className="py-3 flex items-center space-x-3">
                          <img
                            src="/placeholder.svg?height=32&width=32"
                            alt="User"
                            className="w-8 h-8 rounded-full"
                          />
                          <span>{booking.name}</span>
                        </td>
                        <td className="py-3">{booking.type}</td>
                        <td className="py-3">{booking.price}</td>
                        <td className="py-3">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                            {booking.status}
                          </span>
                        </td>
                        <td className="py-3">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical size={20} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
