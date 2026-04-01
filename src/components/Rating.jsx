import React from 'react';

const Rating = () => {
    return (
       <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-10 mb-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between text-center text-white">
        
        
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
          <p className="text-sm opacity-80 mt-1">Active Users</p>
        </div>

       
        <div className="hidden md:block h-12 w-px bg-white/40"></div>

        
        <div className="flex-1 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
          <p className="text-sm opacity-80 mt-1">Premium Tools</p>
        </div>

        
        <div className="hidden md:block h-12 w-px bg-white/40"></div>

        
        <div className="flex-1 mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
          <p className="text-sm opacity-80 mt-1">Rating</p>
        </div>

      </div>
    </div>
    );
};

export default Rating;