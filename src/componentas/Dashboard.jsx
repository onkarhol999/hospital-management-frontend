import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [confirmedAppointments, setConfirmedAppointments] = useState([]);
  const doctorUsername = localStorage.getItem("doctorUsername");

  useEffect(() => {
    const storedAppointments = localStorage.getItem("appointments");
    const storedConfirmed = localStorage.getItem("confirmedAppointments");

    if (storedAppointments) {
      setAppointments(JSON.parse(storedAppointments));
    }

    if (storedConfirmed) {
      setConfirmedAppointments(JSON.parse(storedConfirmed));
    }
  }, []);

  const handleSendMail = (appointment) => {
    const updatedAppointments = appointments.filter((app) => app.id !== appointment.id);
    const updatedConfirmed = [...confirmedAppointments, appointment];

    setAppointments(updatedAppointments);
    setConfirmedAppointments(updatedConfirmed);

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    localStorage.setItem("confirmedAppointments", JSON.stringify(updatedConfirmed));

    navigate("/emailPage", { state: { email: appointment.email, name: appointment.patientName } });
  };

  const handleMoveToPending = (appointment) => {
    const updatedConfirmed = confirmedAppointments.filter((app) => app.id !== appointment.id);
    const updatedAppointments = [...appointments, appointment];

    setAppointments(updatedAppointments);
    setConfirmedAppointments(updatedConfirmed);

    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));
    localStorage.setItem("confirmedAppointments", JSON.stringify(updatedConfirmed));
  };

  const handleDeleteAppointment = async (appointmentId) => {
    try {
      const response = await fetch(`https://perceptive-clarity-production.up.railway.app/deleteAppoitmentById/${appointmentId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setAppointments((prev) => prev.filter((app) => app.id !== appointmentId));
        setConfirmedAppointments((prev) => prev.filter((app) => app.id !== appointmentId));

        localStorage.setItem("appointments", JSON.stringify(appointments.filter((app) => app.id !== appointmentId)));
        localStorage.setItem("confirmedAppointments", JSON.stringify(confirmedAppointments.filter((app) => app.id !== appointmentId)));
      } else {
        console.error("Failed to delete appointment");
      }
    } catch (error) {
      console.error("Error deleting appointment:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Doctor Dashboard</h2>
        <p className="text-gray-600 text-center mb-4">
          Welcome, <span className="font-bold text-blue-600">{doctorUsername}</span>
        </p>

        {/* Pending Appointments Table */}
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Pending Appointments</h3>
        {appointments.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300 rounded-lg mb-6">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 text-left">Patient Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Date & Time</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{appointment.patientName}</td>
                  <td className="p-3">{appointment.email}</td>
                  <td className="p-3">{new Date(appointment.appointmentDateTime).toLocaleString()}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleSendMail(appointment)}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mr-2"
                    >
                      Send Mail
                    </button>
                    <button
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600 mt-4">No pending appointments.</p>
        )}

        {/* Confirmed Appointments Table */}
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Confirmed Appointments</h3>
        {confirmedAppointments.length > 0 ? (
          <table className="min-w-full bg-white border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="p-3 text-left">Patient Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Date & Time</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {confirmedAppointments.map((appointment) => (
                <tr key={appointment.id} className="border-b hover:bg-gray-100">
                  <td className="p-3">{appointment.patientName}</td>
                  <td className="p-3">{appointment.email}</td>
                  <td className="p-3">{new Date(appointment.appointmentDateTime).toLocaleString()}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleMoveToPending(appointment)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 mr-2"
                    >
                      Move to Pending
                    </button>
                    <button
                      onClick={() => handleDeleteAppointment(appointment.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600 mt-4">No confirmed appointments yet.</p>
        )}

        {/* Logout Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => {
              localStorage.removeItem("appointments");
              localStorage.removeItem("confirmedAppointments");
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
