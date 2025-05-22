import { useState } from "react";
import Navbar from "./NavBar";

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    specialization: "",
    experience: "",
    fees: "",
    location: "",
    contact: "",
    email: "",
    availableTimings: "",
    rating: "",
    reviews: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://hospital-management-backend-production-dbf7.up.railway.app/addDocter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add doctor");
      }

      alert("Account created successfully!");
      setFormData({
        username: "",
        password: "",
        name: "",
        specialization: "",
        experience: "",
        fees: "",
        location: "",
        contact: "",
        email: "",
        availableTimings: "",
        rating: "",
        reviews: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding doctor:", error);
      alert("Error adding doctor. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 p-15">
      <Navbar />
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-xl transform transition-all hover:scale-105 duration-300">
        <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-6">
          Make Your Hospital Online
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username and Password Fields */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all shadow-sm hover:shadow-md"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all shadow-sm hover:shadow-md"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Other Fields */}
          {[
            { name: "name", placeholder: "Doctor's Name" },
            { name: "specialization", placeholder: "Specialization" },
            { name: "experience", placeholder: "Experience (e.g., 5 years)" },
            { name: "fees", placeholder: "Fees (e.g., ₹500)" },
            { name: "location", placeholder: "Hospital Location" },
            { name: "contact", placeholder: "Contact Number" },
            { name: "email", placeholder: "Email Address", type: "email" },
            { name: "availableTimings", placeholder: "Available Timings" },
            { name: "rating", placeholder: "Rating (1-5)", type: "number" },
            { name: "reviews", placeholder: "Number of Reviews", type: "number" },
          ].map((field, index) => (
            <input
              key={index}
              type={field.type || "text"}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all shadow-sm hover:shadow-md"
              value={formData[field.name]}
              onChange={handleChange}
              required
            />
          ))}

          <textarea
            name="description"
            placeholder="Description"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all shadow-sm hover:shadow-md"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg font-bold hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-md"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorSignup;
