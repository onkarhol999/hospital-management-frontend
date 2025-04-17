import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 flex justify-between items-center z-50">
      <Link to="/" className="text-xl font-bold">Hospital Managment</Link>
      
      <button onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <ul className={`md:flex gap-6 absolute md:static bg-blue-600 w-full md:w-auto left-0 top-14 md:top-0 p-4 md:p-0 ${open ? "block" : "hidden"}`}>
        <li><Link to="/" className="block py-2 px-4">Home</Link></li>
        <li><Link to="/about" className="block py-2 px-4">About</Link></li>
        <li><Link to="/services" className="block py-2 px-4">Services</Link></li>
        <li><Link to="/login" className="block py-2 px-4">Find My Doctor</Link></li>
        <li><Link to="/doctorDashBoardLogin" className="block py-2 px-4">Dashboard</Link></li>
        <li><Link to="/createAccount" className="block py-2 px-4">Create Account</Link></li>
      </ul>
    </nav>
  );
}