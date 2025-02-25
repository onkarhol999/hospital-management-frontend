import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./NavBar";

const Appointment = () => {
  const location = useLocation();
  const doctor = location.state || {}; // Extract doctor details from navigation state
  const [userName, setUserName] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
        <Navbar/>
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-4">Book Appointment</h2>
        <form className="space-y-4">
          {/* Doctor Name */}
          <div>
            <label className="block text-gray-600 font-medium">Doctor Name</label>
            <input
              type="text"
              value={doctor.name || ""}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          
          {/* Doctor Username */}
          <div>
            <label className="block text-gray-600 font-medium">Doctor Username</label>
            <input
              type="text"
              value={doctor.username || ""}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>

          {/* Patient Name */}
          <div>
            <label className="block text-gray-600 font-medium">Your Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Preferred Date & Time */}
          <div>
            <label className="block text-gray-600 font-medium">Preferred Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Confirm Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
