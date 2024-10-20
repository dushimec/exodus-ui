import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../slices/authSlice"; // Import signup action

function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [notification, setNotification] = useState(""); // State for error/success messages
  const [loading, setLoading] = useState(false); // Loading state

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(); // For file uploads
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    if (photo) formData.append("photo", photo);

    try {
      await dispatch(signup(formData)).unwrap(); // Dispatch signup action
      setNotification("Signup successful!");
      navigate("/login"); // Redirect to login on success
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setNotification(err.response.data.message); // Display error message
      } else {
        setNotification(err.toString());
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-10  text-sm bg-stone-50 max-md:px-3 max-md:py-12 bg-[url('./IMAGE/back.png')] bg-cover bg-center bg-no-repeat h-screen pt-48 pb-20">
      <div className="flex flex-col justify-center items-center px-10 py-8 max-w-full bg-black bg-opacity-90 w-[400px] max-md:px-3">
        <form
          className="flex flex-col max-w-full w-[300px]"
          onSubmit={handleSubmit}
        >
          <div className="self-center text-2xl font-bold text-white">
            REGISTER
          </div>
          <div className="shrink-0 self-center mt-1 border-sky-500 border-solid border-[1px] h-[2px] w-[120px]" />
          <div className="self-center mt-5 text-sm font-semibold text-white max-md:mt-5">
            Create your account
          </div>
          {/* Display Notification */}
          {notification && (
            <div className="text-red-500 mt-4">{notification}</div>
          )}
          {/* Username Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type="text"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
              Name
            </label>
          </div>

          {/* Email Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
              required
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
              Password
            </label>
            <div
              className="absolute right-0 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5 text-white" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-white" />
              )}
            </div>
          </div>

          {/* Photo Upload Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="mt-6 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
            />
            <label className="absolute text-gray-300 text-sm transition-all duration-200 origin-left">
              Upload Photo
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className={`px-8 py-2 mt-8 text-lg font-bold text-white whitespace-nowrap bg-sky-500 max-md:px-4 max-md:mt-5 max-md:max-w-full text-center cursor-pointer hover:bg-sky-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Already have an account? */}
          <div className="flex justify-between items-center ml-10 mt-6 max-w-full w-[200px] max-md:mt-5 text-xs">
            <div className="text-white">Already have an account?</div>
            <Link to="/login" className="text-sky-500 cursor-pointer">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
