import React from 'react';
import LoanCalculator from './LoanCalculator';

const Hero = () => {
  const backgroundUrl = 'https://ionbank.com/wp-content/uploads/2021/05/Lending-lg.jpg';

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-sm scale-105"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      ></div>

      {/* Overlay for darkening the background for better text visibility */}
      <div className="absolute inset-0 bg-black/80 bg-opacity-50"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-8 md:px-20 text-white">
        {/* Left Text Content */}
        <div className="max-w-lg space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-blue-400">
            Welcome to Apna Fund
          </h1>
          <p className="text-2xl font-semibold text-gray-200">
            Building A Brighter Financial Future
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-8 mt-10 text-gray-300 font-medium">
            <div className="bg-blue-600 bg-opacity-70 rounded-lg px-6 py-3 shadow-lg hover:bg-blue-500 transition">
            Quick Payment Process
            </div>
            <div className="bg-blue-600 bg-opacity-70 rounded-lg px-6 py-3 shadow-lg hover:bg-blue-500 transition">
              No Prepayment Fees
            </div>
          </div>
        </div>

        {/* Right Calculator Placeholder */}
        <LoanCalculator/>
      </div>
    </div>
  );
};

export default Hero;
