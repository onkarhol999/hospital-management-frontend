// import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Health & Wellness</h2>
          <p className="text-sm text-gray-300">
            Your trusted partner in healthcare solutions.
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300 transition duration-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Contact
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            Privacy Policy
          </a>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-300 transition duration-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-sm mt-4">
        © {new Date().getFullYear()} Health & Wellness. All rights reserved.
      </div>
    </footer>
  );
}
