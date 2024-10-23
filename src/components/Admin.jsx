import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isemailFocused, setIsemailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [notification, setNotification] = useState("");

  const { loginUser, loading, error } = useAuth();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await loginUser({ email, password }).unwrap();
      setNotification("Login successful!");
      navigate("/admin-dashboard");
    } catch (err) {
      if (error) {
        setNotification(error);
      } else if (err.response && err.response.data && err.response.data.message) {
        setNotification(err.response.data.message);
      } else {
        setNotification(err.toString());
        console.error("Login failed:", err);
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#c4d3d9] text-black">
      <div className="relative flex flex-col text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black rounded-[30px] max-w-[393px] p-10 shadow-[0px_100px_80px_rgba(0,0,0,0.07)]">
        <div className="self-center text-2xl font-bold">Admin Login</div>
        <div className="shrink-0 self-center mt-5 border-sky-500 border-solid border-[2px] h-[1px] w-[90px]" />

        <div className="mt-10 w-full">
          {isemailFocused ? (
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setIsemailFocused(false)}
              autoFocus
              className="w-full p-3 bg-transparent border-b-2 border-sky-500 focus:outline-none text-white"
              placeholder="Enter your  email"
            />
          ) : (
            <div
              onClick={() => setIsemailFocused(true)}
              className="cursor-pointer border-b-2 border-sky-500 h-10"
            >
              <span className="text-xl">{email ? email : "Email"}</span>
            </div>
          )}
        </div>

        <div className="mt-10 w-full relative">
          {isPasswordFocused ? (
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => setIsPasswordFocused(false)}
                autoFocus
                className="w-full p-3 bg-transparent border-b-2 border-sky-500 focus:outline-none text-white"
                placeholder="Enter your password"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </div>
            </div>
          ) : (
            <div
              onClick={() => setIsPasswordFocused(true)}
              className="cursor-pointer border-b-2 border-sky-500 h-10 flex justify-between items-center"
            >
              <span className="text-xl">{password ? "●●●●●●●●" : "password"}</span>
              <FaEye size={20} />
            </div>
          )}
        </div>

        <div className="mt-6 text-sm text-white hover:underline cursor-pointer">
          Forgot password?
        </div>

        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleLogin}
            disabled={loading}
            className="px-10 py-3 bg-sky-500 rounded-3xl hover:bg-sky-600 transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f614a04fbfe4f67d436bd4efc208d2a163c82c08b63b15cd7be4629863e29bc?placeholderIfAbsent=true&apiKey=1e6eb9ecd3e84e559264893c09c12b4f"
            className="w-[190px]  object-contain"
            alt="login image"
          />
        </div>

        {notification && <div className="text-red-500 mt-4">{notification}</div>}
      </div>
    </div>
  );
}

export default Admin;
