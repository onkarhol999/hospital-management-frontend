// import React from "react";
import Navbar from "./NavBar";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col items-center justify-center px-6 py-12">
         <Navbar />
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 animate-fade-in">
        About Us
      </h1>

      {/* Description */}
      <p className="text-lg text-gray-800 text-center max-w-3xl">
        We are dedicated to providing top-notch services for your health and
        wellness. Our team is committed to delivering a seamless experience,
        ensuring you have access to the best resources for a healthier life.
      </p>

      {/* Features Section */}
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="p-6 bg-white shadow-lg rounded-xl text-center transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-bold text-blue-800">💡 Innovation</h2>
          <p className="text-gray-700 mt-2">
            We use the latest technology to bring you the best solutions.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl text-center transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-bold text-blue-800">🤝 Commitment</h2>
          <p className="text-gray-700 mt-2">
            Our mission is to provide quality service with dedication.
          </p>
        </div>

        <div className="p-6 bg-white shadow-lg rounded-xl text-center transform hover:scale-105 transition-all duration-300">
          <h2 className="text-xl font-bold text-blue-800">🌱 Growth</h2>
          <p className="text-gray-700 mt-2">
            We continuously evolve to offer better services and support.
          </p>
        </div>
      </div>
    </div>
  );
}
