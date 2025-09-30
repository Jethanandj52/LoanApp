import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Trusted = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between p-10 gap-10 bg-gray-50">
      {/* Left Side */}
      <div className="space-y-6 flex-1">
        <div className="text-blue-600 font-semibold uppercase tracking-wide">
          Trusted Company
        </div>
        <div className="text-3xl font-bold leading-snug">
          Most of the People Trust Us For Fast Services
        </div>

        {/* Image & Description */}
        <div className="flex gap-5">
          <img
            src="https://webdevcode.com/wp/pylon/live/wp-content/uploads/2020/12/trust-1-1.png"
            alt="Trusted"
            className="w-40  object-contain"
          />
          <p className="text-justify text-gray-700">
            There are many variations of passages of lorem ipsum available, the
            majority have suffered alteration in some form by injected humour.
            Duis aute irure dolor lipsum is simply in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Loan Lists */}
        <div className="flex flex-wrap gap-10">
          <ul className="list-disc list-inside space-y-2 text-gray-700">
           <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
    Credit Card Per Day
  </li>
           <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
                Business Loan</li>
          <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
                Home Loan</li>
            <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
                Car Loan</li>
          </ul>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
                Gold Loan Per Day</li>
            <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
                Mortgage Loan</li>
          <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
                Education Loan / Student Loan</li>
            <li className="flex items-center gap-2">
    <FaCheckCircle className="text-green-500" />
                Wedding Loan</li>
          </ul>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 bg-blue-500 rounded-2xl p-8 space-y-6 text-white">
        {[
          "Easy loan solution for small agency, business and companies",
          "Fast processing & quick approvals",
          "Flexible repayment terms",
          "Trusted by thousands of customers", 
        ].map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-5 bg-white rounded-xl p-5 shadow-md cursor-pointer hover:bg-black hover:text-white"
          >
            <div className="bg-blue-200 text-blue-900 font-bold rounded-full w-10 h-10 flex items-center justify-center">
              {index + 1}
            </div>
            <div className="text-gray-800 ">{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trusted;
