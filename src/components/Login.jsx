import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // Updated import path for v2
import { Link } from 'react-router-dom'; // Import Link

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  return (
    <div className="flex overflow-hidden flex-col justify-center items-center px-10 py-20 text-sm bg-stone-50 max-md:px-3 max-md:py-12 bg-[url('./IMAGE/back.png')] bg-cover bg-center bg-no-repeat h-screen">
      <div className="flex flex-col justify-center items-center px-10 py-8 max-w-full bg-black bg-opacity-90 w-[400px] max-md:px-3">
        <div className="flex flex-col max-w-full w-[300px]">
          <div className="self-center text-2xl font-bold text-white">LOGIN</div>
          <div className="shrink-0 self-center mt-1 border-sky-500 border-solid border-[1px] h-[3px] w-[70px]" />
          <div className="self-center mt-5 text-sm font-semibold text-white max-md:mt-5">
            Log into your account
          </div>

          {/* Email Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type="text"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
            />
            <label className={`absolute transition-all duration-200 origin-left text-gray-300 text-sm ${email ? "mt-[-12px]" : "mt-2"}`}>
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="flex flex-col mt-10 relative">
            <input
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 text-white bg-transparent border-b-2 border-sky-500 focus:outline-none placeholder-transparent"
            />
            <label className={`absolute transition-all duration-200 origin-left text-gray-300 text-sm ${password ? "mt-[-12px]" : "mt-2"}`}>
              Password
            </label>
            {/* Eye Icon for password visibility */}
            <div
              className="absolute right-0 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? (
                <EyeIcon className="h-5 w-5 text-white" />
              ) : (
                <EyeSlashIcon className="h-5 w-5 text-white" />
              )}
            </div>
          </div>

          {/* Login Button */}
          <div className="px-8 py-2 mt-8 text-lg font-extrabold text-white whitespace-nowrap bg-sky-500 max-md:px-4 max-md:mt-5 max-md:max-w-full text-center cursor-pointer hover:bg-sky-600">
            Login
          </div>

          {/* Forgot Password Link */}
          <a href="/forgot-password" className="self-center mt-5 text-white max-md:mt-5 hover:underline">
            Forgot password?
          </a>

          <div className="flex gap-0 self-center mt-6 max-w-full w-[200px] max-md:mt-5 text-xs">
            <div className="grow text-white ml-7">New user?</div>
            {/* Link to signup page */}
            <Link to="/signup" className="grow shrink text-sky-500 cursor-pointer">
              Create account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;


