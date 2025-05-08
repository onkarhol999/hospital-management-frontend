import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import Navbar from "./NavBar";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Password is ignored
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.get(
        `https://perceptive-clarity-production.up.railway.app/getAppoitmentByDocter/${username}`
      );

      if (response.data && response.data.length > 0) {
        console.log("Login successful:", response.data);

        // Store appointment data in localStorage
        localStorage.setItem("appointments", JSON.stringify(response.data));
        localStorage.setItem("doctorUsername", username);

        navigate("/dashboard"); // Redirect to dashboard
      } else {
        setError("Invalid username or no appointments found.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("User not found. Please enter a valid username.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Navbar />
      <div className="relative bg-white shadow-lg rounded-2xl p-10 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login for Your Dashboard
        </h2>

        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Username Field */}
          <div>
            <label className="block text-gray-700 font-medium">Username</label>
            <div className="flex items-center bg-gray-200 rounded-lg p-2 shadow-inner">
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

          {/* Password Field (Not Used) */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center bg-gray-200 rounded-lg p-2 shadow-inner">
              <FaLock className="text-gray-500 mx-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password (Not Required)"
                className="w-full bg-transparent focus:outline-none text-gray-800"
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
      </div>
    </div>
  );
};

export default Login;
