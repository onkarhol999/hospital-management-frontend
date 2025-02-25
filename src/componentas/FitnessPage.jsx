import React from "react";
import { FaHeartbeat, FaDumbbell, FaRunning, FaBicycle, FaLeaf, FaBalanceScale } from "react-icons/fa";
import Navbar from "./NavBar";

const fitnessData = [
  {
    name: "Cardiovascular Endurance",
    description: "Improves heart health and increases stamina.",
    icon: <FaHeartbeat className="text-red-500 text-4xl" />,
  },
  {
    name: "Muscular Strength",
    description: "Helps in building muscle mass and boosting metabolism.",
    icon: <FaDumbbell className="text-gray-700 text-4xl" />,
  },
  {
    name: "Flexibility",
    description: "Enhances movement range and prevents injuries.",
    icon: <FaBalanceScale className="text-blue-500 text-4xl" />,
  },
  {
    name: "Speed & Agility",
    description: "Improves quickness and reaction time.",
    icon: <FaRunning className="text-green-500 text-4xl" />,
  },
  {
    name: "Endurance Cycling",
    description: "Boosts lower body strength and stamina.",
    icon: <FaBicycle className="text-yellow-500 text-4xl" />,
  },
  {
    name: "Mind & Body Balance",
    description: "Enhances coordination and mental well-being.",
    icon: <FaLeaf className="text-purple-500 text-4xl" />,
  },
];

const FitnessPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-blue-200 to-white pt-20">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-6">Fitness Components</h1>
        <p className="text-lg text-gray-700 text-center max-w-2xl mb-8">
          Fitness is not just about exercise; it’s a way of life. Explore these key components to achieve overall well-being.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 w-full max-w-5xl">
          {fitnessData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
            >
              {item.icon}
              <h2 className="text-2xl font-semibold mt-4">{item.name}</h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
    
  );
};

export default FitnessPage;
