import React from "react";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-gray-600 mb-6">
            Access premium AI tools, design assets, templates, and productivity
            software-all in one place. Start creating faster today. Explore
            Products .
          </p>

          <div className="flex gap-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full">
              Explore Products
            </button>

            <button className="border  border-purple-600 font-bold text-purple-600/100 px-6 py-2 rounded-full hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Watch Demo
            </button>
          </div>
        </div>

        
        <div className="mt-10 md:mt-0">
          <img src={banner} alt="banner" className="w-[400px] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
