import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../slices/postSlice.js"; // Ensure this action correctly fetches posts
import { Trash, Edit } from "lucide-react";

const TripPanel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts()); // Fetch posts when the component mounts
  }, [dispatch]);

  const trips = useSelector((state) => {
    const posts = state.posts.posts;
    if (Array.isArray(posts)) {
      return posts.flatMap(post => post.trips || []); // Extract trips from all posts
    }
    return [];
  });

  const handleDeleteTrip = (tripId) => {
    console.log("Delete trip with ID:", tripId);
    // Add delete logic here
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Trip Management</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Destination</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trips.length > 0 ? (
              trips.map((trip) => (
                <tr key={trip._id} className="border-b last:border-b-0">
                  <td className="py-4 px-4 border">{trip.title}</td>
                  <td className="py-4 px-4 border">{trip.destination || "N/A"}</td>
                  <td className="py-4 px-4 border">{new Date(trip.tripDate).toLocaleDateString()}</td>
                  <td className="py-4 px-4 border">{trip.price} USD</td>
                  <td className="py-4 px-4 border">
                    <div className="flex space-x-2">
                      <button className="text-sky-500 hover:text-sky-600">
                        <Edit size={18} />
                      </button>
                      <button 
                        className="text-red-500 hover:text-red-600"
                        onClick={() => handleDeleteTrip(trip._id)}
                      >
                        <Trash size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">No trips available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export {TripPanel};
