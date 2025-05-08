import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import axios from "axios";

const Appointment = () => {
  const location = useLocation();
  const doctor = location.state || {}; // Extract doctor details from navigation state
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const appointmentData = {
      doctorName: doctor.name,
      doctorUsername: doctor.username,
      patientName: userName,
      email,
      dateTime,
    };

    try {
      const response = await axios.post(
        "https://perceptive-clarity-production.up.railway.app/addAppoitment",
        appointmentData
      );
      setSuccess("Appointment booked successfully!");
      setUserName("");
      setEmail("");
      setDateTime("");
    } catch (err) {
      setError("Failed to book appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <Navbar />
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-800 mb-4">Book Appointment</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 font-medium">Doctor Name</label>
            <input
              type="text"
              value={doctor.name || ""}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Doctor Username</label>
            <input
              type="text"
              value={doctor.username || ""}
              readOnly
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Your Name</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Preferred Date & Time</label>
            <input
              type="datetime-local"
              value={dateTime}
              onChange={(e) => setDateTime(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Booking..." : "Confirm Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;