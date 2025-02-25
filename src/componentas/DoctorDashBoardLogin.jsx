import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from "./NavBar";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });

    // Redirect to dashboard after successful login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <Navbar/>
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 opacity-30"></div>

      <div className="relative bg-white shadow-lg rounded-2xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login for Your Dashboard
        </h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <div className="flex items-center bg-gray-200 rounded-lg p-2 shadow-inner focus-within:ring-2 focus-within:ring-blue-500">
              <FaUser className="text-gray-500 mx-2" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="w-full bg-transparent focus:outline-none text-gray-800"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center bg-gray-200 rounded-lg p-2 shadow-inner focus-within:ring-2 focus-within:ring-blue-500">
              <FaLock className="text-gray-500 mx-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-transparent focus:outline-none text-gray-800"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Additional Links */}
        <div className="text-center text-gray-600 mt-4">
          <p className="hover:text-blue-600 cursor-pointer">Forgot Password?</p>
          <p className="mt-2">
            Don't have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => navigate("/createAccount")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
