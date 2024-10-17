import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Eye icons for password visibility toggle

function Admin () {
  const [username, setUsername] = useState(""); // State to manage the admin username input
  const [password, setPassword] = useState(""); // State to manage the password input
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [isUsernameFocused, setIsUsernameFocused] = useState(false); // State to track focus on username input
  const [isPasswordFocused, setIsPasswordFocused] = useState(false); // State to track focus on password input

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#c4d3d9] text-black">
        <div className="relative flex flex-col text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[30px] max-w-[393px] p-10 shadow-[0px_100px_80px_rgba(0,0,0,0.07)]">
          {/* Blurred circles inside the card */}
          <div className="absolute top-[-50px] left-[-50px] w-[150px] h-[150px] bg-white opacity-20 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-50px] right-[-50px] w-[150px] h-[150px] bg-white opacity-20 rounded-full blur-[80px]" />

          {/* Admin Login Title */}
          <div className="self-center text-2xl font-bold">Admin Login</div>
          <div className="shrink-0 self-center mt-5 border-sky-500 border-solid border-[2px] h-[1px] w-[90px]" />

          {/* Username Input Field */}
          <div className="mt-10 w-full">
           
            {isUsernameFocused ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={() => setIsUsernameFocused(false)} // Close input when it loses focus
                autoFocus
                className="w-full p-3 bg-transparent border-b-2 border-sky-500 focus:outline-none text-white"
                placeholder="Enter your username"
              />
            ) : (
              <div
                onClick={() => setIsUsernameFocused(true)} // Open input on click
                className="cursor-pointer border-b-2 border-sky-500 h-10"
              >
                <span className="text-xl">{username ? username : "admin"}</span>
              </div>
            )}
          </div>

          {/* Divider */}
 

          {/* Password Input Field */}
          <div className="mt-10 w-full relative">
          
            {isPasswordFocused ? (
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle between text and password
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setIsPasswordFocused(false)} // Close input when it loses focus
                  autoFocus
                  className="w-full p-3 bg-transparent border-b-2 border-sky-500 focus:outline-none text-white"
                  placeholder="Enter your password"
                />
                {/* Eye Icon for toggling password visibility */}
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                </div>
              </div>
            ) : (
              <div
                onClick={() => setIsPasswordFocused(true)} // Open input on click
                className="cursor-pointer border-b-2 border-sky-500 h-10 flex justify-between items-center"
              >
                <span className="text-xl">{password ? "●●●●●●●●" : "password"}</span>
                {/* Eye Icon visible when not in input mode */}
                <FaEye size={20} />
              </div>
            )}
          </div>

      

          {/* Forgot password link */}
          <div className="mt-6 text-sm text-white hover:underline cursor-pointer">
            Forgot password?
          </div>

          {/* Login button */}
          <div className="flex justify-between items-center mt-8">
            <button className="px-10 py-3 bg-sky-500 rounded-3xl hover:bg-sky-600 transition duration-300">
              Login
            </button>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f614a04fbfe4f67d436bd4efc208d2a163c82c08b63b15cd7be4629863e29bc?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
              className="w-[190px]  object-contain"
              alt="login image"
            />
          </div>
        </div>
      </div>

      {/* Custom styles for the blurred circles */}
      <style jsx>{`
        builder-component {
          max-width: none !important;
        }
      `}</style>
    </>
  );
}

export default Admin;
