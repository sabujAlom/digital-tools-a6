import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { ImCheckmark } from "react-icons/im";

const PricingSection = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">Starter</h3>
              <p className="text-gray-500 text-sm mt-1">
                Perfect for getting started
              </p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="space-y-4 mb-10 text-gray-600 flex-1">
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Access to 10 free tools
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Basic templates
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Community supportt
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                1 project per month
              </li>
            </ul>

            <button className="mt-auto w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-4 rounded-2xl">
              Get Started Free
            </button>
          </div>

          <div className="relative bg-white border-2 border-purple-600 rounded-3xl p-8 flex flex-col h-full shadow-xl scale-105 hover:bg-gradient-to-r from-purple-400 to-pink-300 transition duration-75">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-6 py-1 rounded-full">
              MOST POPULAR
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-purple-900">Pro</h3>
              <p className="text-gray-500 text-sm mt-1">
                Best for professionals
              </p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold text-gray-900">$29</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="space-y-4 mb-10 text-gray-900 flex-1">
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <ImCheckmark />
                </span>
                Access to all premium tools
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <ImCheckmark />
                </span>
                Unlimited projects
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <ImCheckmark />
                </span>
                Priority support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <ImCheckmark />
                </span>
                Unlimited projects
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <ImCheckmark />
                </span>
                Cloud sync
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <ImCheckmark />
                </span>
                Advanced analytics
              </li>
            </ul>

            <button className="mt-auto w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-4 rounded-2xl">
              Start Pro Trial
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col h-full">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-800">
                Enterprise
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                For large organizations
              </p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500">/month</span>
            </div>

            <ul className="space-y-4 mb-10 text-gray-600 flex-1">
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Everything in Pro
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Team management
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Dedicated manager
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Custom integrations
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Advanced security
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500">
                  <FcCheckmark />
                </span>
                Custom training
              </li>
            </ul>

            <button className="mt-auto w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white font-semibold py-4 rounded-2xl">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
