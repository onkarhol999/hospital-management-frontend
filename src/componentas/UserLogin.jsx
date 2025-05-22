import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import { Link } from "react-router-dom"; 

const UserLogin = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://hospital-management-backend-production-dbf7.up.railway.app/loginUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        setMessage("✅ Login successful!");
        setTimeout(() => {
          navigate("/findMyDoctor");
        }, 1000);
      } else {
        setMessage("❌ Invalid username or password.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage("⚠️ Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center">
        <Navbar/>
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back</h2>
        {message && <p className="mb-4 text-center text-sm text-green-600">{message}</p>}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Username</label>
            <input
              type="text"
              name="userName"
              value={loginData.userName}
              onChange={handleChange}
              required
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
            Don't have an account?{" "}
             <Link to="/signUp" className="text-blue-600 hover:underline">
                        Sign up
             </Link>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
