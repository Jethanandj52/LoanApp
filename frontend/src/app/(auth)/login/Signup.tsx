"use client";

import { FaGoogle, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Login from "./Login";
import axios from "axios";

const Signup = () => {
  const [show, setShow] = useState(true);
  const [signIn, setSignIn] = useState(false);

  const [cnic, setCnic] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (signIn) {
     return <Login onClose={() => setSignIn(false)} />;
  }

  if (!show) return null;

  async function register(e:any) {
    e.preventDefault(); // form refresh hone se roke

    if (!name || !cnic || !email || !password) {
      alert("Please enter all fields");
      return;
    }

    try {
      await axios.post(
        "http://localhost:7000/auth/signup",
        {
          cnic,
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      alert("User registered successfully!");
      setSignIn(true); // login pe le jao
    } catch (error) {
      console.error(error);
      alert("Signup failed. Please try again.");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md animate-fadeIn relative">
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Create Your Account
        </h2>

        {/* Signup Form */}
        <form className="space-y-4" onSubmit={register}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="CNIC (xxxxx-xxxxxxx-x)"
            className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setCnic(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Sign in link */}
          <div className="flex justify-end text-sm text-blue-600">
            <button
              type="button"
              className="hover:underline"
              onClick={() => setSignIn(true)}
            >
              Sign In
            </button>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Quick Signup with Socials */}
        <div className="flex gap-3 justify-center">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 text-black">
            <FaGoogle className="text-red-500" /> Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 text-black">
            <FaLinkedin className="text-blue-600" /> LinkedIn
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 text-black">
            <FaInstagram className="text-pink-500" /> Instagram
          </button>
        </div>
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

export default Signup;
