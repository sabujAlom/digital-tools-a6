import React from 'react';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const Workflow = () => {
    return (
        <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-6xl font-bold tracking-tight mb-6">
          Ready to Transform Your Workflow?
        </h2>

        {/* Subheading */}
        <p className=" md:text-xl text-white/90 mb-4 max-w-2xl mx-auto">
         Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
        </p>

        <p className="text-lg text-white/80 mb-12">
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-purple-700 hover:bg-white/90 transition-all font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl active:scale-95">
            Explore Products
          </button>

          <button className="border-2 border-white/80 hover:border-white text-white font-semibold text-lg px-10 py-4 rounded-full transition-all hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 active:scale-95">
            View Pricing
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-12 text-sm text-white/70 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2">
            <span><IoIosCheckmarkCircleOutline/></span>
            <span>14-day free trial</span>
          </div>
          <div className="hidden sm:block text-white/40">•</div>
          <div className="flex items-center gap-2">
            <span><IoIosCheckmarkCircleOutline/></span>
            <span>No credit card required</span>
          </div>
          <div className="hidden sm:block text-white/40">•</div>
          <div className="flex items-center gap-2">
            <span><IoIosCheckmarkCircleOutline/></span>
            <span> Cancel anytime </span>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Workflow;