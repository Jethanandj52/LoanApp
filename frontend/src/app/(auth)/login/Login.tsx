"use client";

import { FaGoogle, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import Signup from "./Signup";
import Forget from "./Forget";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/feature/userSlice";
import Loan from "@/app/components/Loan";



const Login = ({ onClose = () => {}, onLoginSuccess = () => {} }) => {
  const [signup, setSignup] = useState(false);
  const [forget, setForget] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showLoan,setShowLoan]=useState(false)

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (user) {
      console.log("Logged in user data from Redux:", user);
    }
  }, [user]);

  if (signup) return <Signup />;
  if (forget) return <Forget />;
  if(showLoan) return<Loan onClose={()=>setShowLoan(false)}/>

  async function login(e: React.FormEvent) {
    e.preventDefault();

    if (!user) {
      if (!email.trim() || !password.trim()) {
        alert("Please enter all fields");
        return;
      }

      try {
        const res = await axios.post(
          "http://localhost:7000/auth/login",
          { email, password },
          { withCredentials: true }
        );

        dispatch(setUser(res.data));
        alert("User login successfully");

       setShowLoan(true)
        onLoginSuccess(); // Parent ko signal de raha hu

      } catch (error: any) {
        alert(error.response?.data?.message || "Login failed");
      }
    } else {
      alert("User already registered");
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md animate-fadeIn relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:text-red-500 text-red-800 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">
          Welcome Back
        </h2>

        {/* Login Form */}
        <form className="space-y-4" onSubmit={login}>
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 text-black py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="flex justify-between text-sm mt-4 text-blue-600">
          <button className="hover:underline" onClick={() => setSignup(true)}>
            Sign up
          </button>
          <button className="hover:underline" onClick={() => setForget(true)}>
            Forgot Password?
          </button>
        </div>

        {/* OR Separator */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-gray-400">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
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
    </div>
  );
};

export default Login;
