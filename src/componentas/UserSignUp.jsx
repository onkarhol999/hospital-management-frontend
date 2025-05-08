import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ← import useNavigate
import Navbar from "./NavBar";
import { Link } from "react-router-dom"; 

const UserSignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    contactNumber: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // ← initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://perceptive-clarity-production.up.railway.app/addUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("🎉 User registered successfully!");
        setFormData({ userName: "", name: "", contactNumber: "", password: "" });

        setTimeout(() => {
          navigate("/findMyDoctor"); // ← redirect to /findMyDoctor
        }, 1000); // delay to show success message for a second
      } else {
        setMessage("❌ Failed to register user.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("⚠️ Error occurred while registering.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
        <Navbar/>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Create an Account</h2>
        {message && <div className="mb-4 text-sm text-center text-green-600">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a strong password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

         <p className="text-sm text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
                Login
            </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
