import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./NavBar";

const EmailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract email and name from navigation state
  const { email, name } = location.state || { email: "", name: "" };

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    return now.toLocaleString();
  };

  // Form state
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Set default subject when component mounts
  useEffect(() => {
    setSubject(`Appointment Reminder - ${getCurrentDateTime()}`);
  }, []);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://perceptive-clarity-production.up.railway.app/sendEmail", {
        to: email, // Corrected from "email" to "to"
        subject,
        message,
      });

      if (response.status === 200) {
        alert(`Email sent to ${email} successfully! 📩`);
        navigate("/dashboard");
      } else {
        setError("Failed to send email. Please try again.");
      }
    } catch (err) {
      console.error("API Error:", err.response || err);
      setError("Error sending email. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Navbar />
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Send Email to Patient
        </h2>

        {error && <p className="text-red-600 text-center mb-3">{error}</p>}

        <form onSubmit={handleSendEmail} className="space-y-4">
          {/* Patient Name */}
          <div>
            <label className="block text-gray-600 font-medium">Patient Name:</label>
            <input
              type="text"
              value={name}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Email (Pre-filled) */}
          <div>
            <label className="block text-gray-600 font-medium">Email:</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-600 font-medium">Subject:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-600 font-medium">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your message..."
              rows="4"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Back to Dashboard
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Email"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailPage;
