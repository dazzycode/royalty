import React from "react";
import { FaTools } from "react-icons/fa";
import {  Link } from 'react-router-dom';

const BuildingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#004E5B] to-black flex items-center justify-center px-4 text-white">
      <div className="text-center space-y-6">
        <div className="relative inline-block">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#004E5B] to-indigo-600 flex items-center justify-center shadow-[0_0_40px_#7c3aed] animate-pulse">
            <FaTools className="text-4xl animate-spin-slow" />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide">
          We’re Building Something Awesome 🚧
        </h1>

        <p className="text-sm md:text-base text-gray-300 max-w-lg mx-auto">
          Stay tuned while we updates our new Eco-furnitures. We are cirrenting building something.
        </p>

                        <Link to="/">
 <button className="mt-6 px-6 py-3 rounded-full bg-[#004E5B] hover:bg-teal-700 transition-all text-white font-medium shadow-md">
          Go Back Home
        </button></Link>
      </div>
    </div>
  );
};

export default BuildingPage;
