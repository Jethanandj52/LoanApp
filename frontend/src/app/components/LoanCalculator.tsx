'use client'
import React, { useState } from 'react';
import Login from '../(auth)/login/Login';
import { useSelector } from 'react-redux';
import Loan from "./Loan"
import Popup from '../Popup/popup';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(20600);
  const [loanTerm, setLoanTerm] = useState(8);

    const user = useSelector((state: any) => state.user.user);

  // Login popup toggle state
  const [showLogin, setShowLogin] = useState(false);
  const [showLoan, setShowLoan] = useState(false);



  function apply() {
  if(user){
    setShowLoan(true)
  } else {
    // Pehle close karke phir open karo
    setShowLogin(false);
    setTimeout(() => setShowLogin(true), 0);
  }
}


  const monthlyInterestRate = 0.02; // 2% per month
  const totalPayback = loanAmount + loanAmount * monthlyInterestRate * loanTerm;
  const payMonthly = totalPayback / loanTerm;

  return (
    <div className="relative">
      <div className="w-100 bg-white p-6 rounded-lg shadow-lg font-sans">
        <h2 className="text-white bg-blue-600 text-center py-4 rounded-t-lg text-xl font-semibold mb-4">
          How Much You Need
        </h2>

        {/* Loan Amount Slider */}
        <div className="mb-6">
          <div className="flex justify-between text-gray-600 text-sm mb-1 px-1">
            <span>Rs.1000</span>
            <span>Rs.{loanAmount.toLocaleString()}</span>
            <span>Rs.40000</span>
          </div>
          <input
            type="range"
            min="1000"
            max="40000"
            step="100"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Loan Term Slider */}
        <div className="mb-6">
          <div className="flex justify-between text-gray-600 text-sm mb-1 px-1">
            <span>1 Months</span>
            <span>{loanTerm}</span>
            <span>12 Months</span>
          </div>
          <input
            type="range"
            min="1"
            max="12"
            step="1"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Results */}
        <div className="space-y-3 text-gray-700 text-sm px-1">
          <div className="flex justify-between">
            <span>Pay Monthly</span>
            <span className="font-semibold">Rs.{payMonthly.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Term of Use</span>
            <span className="font-semibold">{loanTerm} Months</span>
          </div>
          <div className="flex justify-between">
            <span>Total Pay Back</span>
            <span className="font-semibold">Rs.{totalPayback.toFixed(0)}</span>
          </div>
        </div>

        {/* Apply Button */}
        <button
          type="button"
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold  hover:shadow-lg active:scale-90 transition-all cursor-pointer"
          onClick={apply}
        >
          Apply For Loan
        </button>
      </div>

      {/* Login Popup */}
      {showLogin &&  <Popup/>}
      {showLoan &&  <Loan onClose={() => setShowLoan(false)} />}

      
    </div>
  );
};

export default LoanCalculator;
