import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../slices/authSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, forgotPasswordStatus, error } = useSelector(
    (state) => state.auth
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#134e5e] to-[#71b280]">
      <div className="bg-[#584175] rounded-3xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-white text-4xl font-bold mb-4 text-center font-['Gotham'] leading-tight">
          Forgot Password?
        </h1>
        <p className="text-white text-lg text-center mb-6 font-['Gotham']">
          Don't worry. We can help.
        </p>
        <p className="text-white text-lg text-center mb-4 font-['Gotham'] leading-snug">
          Please fill in your email address
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full h-12 rounded-lg p-4 mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#71b280] transition duration-300"
          />
          <button
            type="submit"
            className="w-full h-12 bg-white text-[#592f92] font-bold rounded-lg shadow hover:bg-[#f3f4f6] transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Continue"}
          </button>
        </form>

        {forgotPasswordStatus && (
          <div className="text-green-500 text-center mt-4">
            {forgotPasswordStatus}
          </div>
        )}

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;