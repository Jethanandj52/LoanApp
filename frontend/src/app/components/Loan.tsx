"use client";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const Loan = ({ onClose = () => {} }) => {
  const user = useSelector((state:any) => state.user.user);

  const [step, setStep] = useState(1); // 1=Loan, 2=Guarantor1, 3=Guarantor2
  const [loanId, setLoanId] = useState(null);

  // Loan details
  const [amount, setAmount] = useState("");
  const [monthDuration, setMonthDuration] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [loanCategory, setLoanCategory] = useState("");

  // Guarantors
  const [guarantor1, setGuarantor1] = useState({ name: "",email:"",location:"", cnic: ""});
  const [guarantor2, setGuarantor2] = useState({ name: "",email:"",location:"", cnic: ""});

  // Step control
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Step 1 → Create Loan
  async function loanData(e:any) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:7000/loan/apply",
        {
          userId: user.id,
          loanCategory,
          amount,
          durationMonths: monthDuration,
          purpose: loanPurpose,
        },
        { withCredentials: true }
      );
      console.log("Loan added", res.data);
     const id = res.data.loan._id;
setLoanId(id);
console.log("Loan ID right after API:", id);

      // backend should return loanId
      nextStep();
    } catch (error) {
      console.error(error);
    }
  }

  // Step 2 → Add Guarantor 1
  async function addGuarantor1(e:any) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:7000/guarantor/register",
        {
          loanId,
          name: guarantor1.name,
          email:guarantor1.email,
          location:guarantor1.location,
          cnic:guarantor1.cnic
        },
        { withCredentials: true }
      );
      console.log("Guarantor 1 added");
      nextStep();
    } catch (error) {
      console.error(error);
    }
  }

  // Step 3 → Add Guarantor 2
  async function addGuarantor2(e:any) {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:7000/guarantor/register",
        {
          loanId,
          name: guarantor2.name,
          email:guarantor2.email,
          location: guarantor2.location,
          cnic: guarantor2.cnic,
        },
        { withCredentials: true }
      );
      console.log("Guarantor 2 added");
      alert("Loan application completed successfully!");
      onClose();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md animate-fadeIn relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Loan Application - Step {step}
        </h2>

        {/* Step 1: Loan Details */}
        {step === 1 && (
          <form className="space-y-4" onSubmit={loanData}>
            <select
              onChange={(e) => setLoanCategory(e.target.value)}
              className="w-full text-black px-4 py-2 border rounded-lg"
              defaultValue=""
            >
              <option value="" disabled>
                Choose Any Loan
              </option>
              <option value="wedding">Wedding</option>
              <option value="education">Education</option>
              <option value="home">Home</option>
              <option value="business">Business</option>
            </select>
            <input
              type="text"
              placeholder="Enter Your Amount"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Month Duration"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setMonthDuration(e.target.value)}
            />
            <input
              type="text"
              placeholder="Purpose of Loan"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setLoanPurpose(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Next
            </button>
          </form>
        )}

        {/* Step 2: Guarantor 1 */}
        {step === 2 && (
          <form className="space-y-4" onSubmit={addGuarantor1}>
            <input
              type="text"
              placeholder="Guarantor 1 Name"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setGuarantor1({ ...guarantor1, name: e.target.value })}
            />
            {/* { name: "",email:"",location:"", cnic: ""} */}
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setGuarantor1({ ...guarantor1, email: e.target.value })}
            />
           
            <input
              type="text"
              placeholder="Guarantor 1 CNIC"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setGuarantor1({ ...guarantor1, cnic: e.target.value })}
            />
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setGuarantor1({ ...guarantor1, location: e.target.value })}
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-1/2 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Guarantor 2 */}
        {step === 3 && (
          <form className="space-y-4" onSubmit={addGuarantor2}>
            <input
              type="text"
              placeholder="Guarantor 2 Name"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setGuarantor2({ ...guarantor2, name: e.target.value })}
            />

              <input
              type="text"
              placeholder="Enter Email"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setGuarantor2({ ...guarantor2, email: e.target.value })}
            />
            <input
              type="text"
              placeholder="Guarantor 2 CNIC"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setGuarantor2({ ...guarantor2, cnic: e.target.value })}
            />
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full text-black px-4 py-2 border rounded-lg"
              onChange={(e) => setGuarantor2({ ...guarantor2, location: e.target.value })}
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevStep}
                className="w-1/2 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-1/2 bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
              >
                Submit Loan
              </button>
            </div>
          </form>
        )}
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Loan;
