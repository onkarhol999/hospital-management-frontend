import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const doctorUsername = localStorage.getItem("doctorUsername");

  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-19">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Doctor Dashboard
        </h2>

        <p className="text-gray-600 text-center mb-4">
          Welcome, <span className="font-bold text-blue-600">{doctorUsername}</span>
        </p>

        {appointments.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 text-left">Patient Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{appointment.patientName}</td>
                  <td className="p-3">{appointment.email}</td>
                  <td className="p-3">{new Date(appointment.appointmentDateTime).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600 mt-4">
            No appointments found.
          </p>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => {
              localStorage.removeItem("appointments");
              localStorage.removeItem("doctorUsername");
              navigate("/");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
