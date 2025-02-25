import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";

export default function Services() {
  const services = [
    {
      title: "📖 Read Blogs",
      description: "Stay informed with expert-written health & wellness articles.",
      path: "/blogs",
    },
    {
      title: "📅 Book Appointment",
      description: "Schedule a session with our professionals at your convenience.",
      path: "/findMyDoctor",
    },
    {
      title: "🏋️‍♂️ Understand Fitness",
      description: "Learn the science behind staying fit and healthy.",
      path: "/fitness",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex flex-col items-center py-16 px-6">
        <Navbar/>
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-blue-800 mb-10 drop-shadow-lg">
        Our Services
      </h1>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <Link to={service.path} key={index} className="group">
            <div className="p-8 bg-white shadow-xl rounded-2xl text-center transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl border border-blue-300 hover:border-indigo-400">
              <h2 className="text-3xl font-semibold text-blue-900 group-hover:text-indigo-700 transition-colors duration-300">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-3 text-lg">{service.description}</p>
              <div className="mt-4 text-blue-600 font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Explore →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
