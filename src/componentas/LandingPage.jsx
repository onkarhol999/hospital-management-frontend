// import React, { useEffect } from "react";
import heroLogo from "../assets/logo_2.png";
import Footer from "./Footer";
import Navbar from "./NavBar";

export default function LandingPage() {
//   useEffect(() => {
//     document.querySelector("main").classList = "px-0 pt-[60px]";
//   }, []);

  return (
    <div className="min-h-screen">
        <Navbar />
      <div className="absolute top-4 left-4 w-1/3 z-[1] h-fit">
        <img draggable={false} src="./honeycomb.svg" alt="style" />
      </div>

      <div className="bg-gradient-to-tl from-slate-300 bg-blue-400 relative p-0 space-y-3 pt-2 mb-4 shadow-md">
        <div className="flex justify-end pr-3">
          <img width={120} src={heroLogo} alt="health-care" />
        </div>

        <div className="flex justify-between items-center pl-32">
          <div className="w-[35rem] space-y-6">
            <h1 className="font-bold text-4xl text-blue-900">
              Your Partner in <br /> Health and Wellness
            </h1>
            <p className="text-[1rem] text-blue-900 font-semibold">
              We are committed to providing you with the best medical and
              healthcare services to help you live healthier and happier
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 px-8 py-2 rounded-lg text-white">
              Get Started {">"}
            </button>
          </div>

          <img
            draggable={false}
            width={400}
            src="doctor_home.png"
            alt="doctors"
          />
        </div>

        <img
          draggable={false}
          className="absolute bottom-10 left-[50%] translate-x-[-50%] w-[220px]"
          src="./home_hero_bottom.png"
          alt="home_hero"
        />
      </div>

      <div className="flex justify-center mt-14 mb-6">
        <img
          draggable={false}
          className="w-[75vw]"
          src="./about.svg"
          alt="about"
        />
      </div>
      <Footer />
    </div>
  );
}
