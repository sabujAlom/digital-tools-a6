import React from 'react';
import signing from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocket from '../assets/rocket.png'

const GetStartedStep = () => {
    return (
       <div className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Get Started in 3 Steps
          </h2>
          <p className="text-gray-600 text-lg">
           Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center relative hover:shadow-xl transition-shadow">
            <div className="absolute top-1 right-1 -translate-x-1/2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              1
            </div>
            
            <div className="mt-6 mb-6">
              <div className="w-20 h-20 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center">
                <img src={signing} alt="" />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Create Account</h3>
            <p className="text-gray-600 leading-relaxed">
              Sign up for free in seconds. No credit card required to get started.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center relative hover:shadow-xl transition-shadow">
            <div className="absolute top-1 right-1 -translate-x-1/2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              2
            </div>
            
            <div className="mt-6 mb-6">
              <div className="w-20 h-20 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center">
                <img src={packageImg} alt="loading.." />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Products</h3>
            <p className="text-gray-600 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center relative hover:shadow-xl transition-shadow">
            <div className="absolute top-1 right-1 -translate-x-1/2 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              3
            </div>
            
            <div className="mt-6 mb-6">
              <div className="w-20 h-20 mx-auto bg-purple-100 rounded-2xl flex items-center justify-center">
                <img src={rocket} alt="loading..." />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Creating</h3>
            <p className="text-gray-600 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default GetStartedStep;