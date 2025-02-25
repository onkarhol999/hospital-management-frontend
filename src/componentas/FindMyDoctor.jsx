import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const FindMyDoctor = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await fetch("https://hospital-management-backend-production.up.railway.app/getAllDoctors");
        if (!response.ok) {
          throw new Error("Failed to fetch doctors");
        }
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  const handleAppointment = (doctor) => {
    navigate(`/appointment`, { state: { name: doctor.name, username: doctor.username } });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <Navbar />
      <h1 className="text-4xl font-bold text-blue-800 text-center mb-6">Find My Doctor</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
        {doctors.map((doctor) => (
          <div
            key={doctor.username}
            className="bg-white p-6 shadow-lg rounded-lg flex flex-col items-center hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
          >
            <h2 className="text-2xl font-semibold text-gray-800">{doctor.name}</h2>
            <p className="text-gray-600 font-medium">@{doctor.username}</p>
            <p className="text-gray-600 font-medium">{doctor.specialization}</p>
            <p className="text-gray-500">Experience: {doctor.experience}</p>
            <p className="text-green-600 font-bold mt-2">Fees: {doctor.fees}</p>
            <p className="text-gray-500">Location: {doctor.location}</p>
            <p className="text-gray-500">Contact: {doctor.contact}</p>
            <p className="text-gray-500">Available: {doctor.availableTimings}</p>
            <p className="text-yellow-500 font-medium">Rating: {doctor.rating} ⭐ ({doctor.reviews} Reviews)</p>
            <p className="text-gray-500 text-center mt-3">{doctor.description}</p>
            <button
              onClick={() => handleAppointment(doctor)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindMyDoctor;
