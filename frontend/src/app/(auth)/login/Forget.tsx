"use client";

import { FaGoogle, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Login from "./Login";

const Forget = () => {
  const [show, setShow] = useState(true); // Toggle popup
  const [signIn,setSignIn]=useState(false)
if(signIn){
    return <Login onClose={()=>setShow(false)}/>
}


  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md animate-fadeIn relative">
        
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Forget Password
        </h2>

        {/* Signup Form */}
        <form className="space-y-4">
          
         
          <input
            type="email"
            placeholder="Email address"
            className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
         

          {/* Signup Button */}
        

           <div className="flex justify-end text-sm   text-blue-600">
          <button className="hover:underline" onClick={()=>setSignIn(true)}>SignIn</button>
 
        </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
       

        {/* Quick Signup with Socials */}
       
      </div>

      {/* Animation */}
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

export default Forget;
