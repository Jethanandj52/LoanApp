import React from 'react'
import { FaClock, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion";
import { clearUser } from '../Redux/feature/userSlice';
import axios from 'axios';


const User = ({ hideUser }: { hideUser: () => void }) => {
      const user = useSelector((state: any) => state.user.user);
      const dispatch = useDispatch();

   async function logout() {
  try {
    const res = await axios.post(
      'http://localhost:7000/auth/logout',
      { email: user?.email },
      { withCredentials: true }
    );

    console.log("Logout response:", res.data);
    dispatch(clearUser()); // redux se user clear
    hideUser(); // User component ko hide kar do
  } catch (error) {
    console.error('Logout failed:', error);
  }
}


  return (
     <>
   <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
   className="fixed top-20 right-5 z-50 bg-white p-6 rounded-2xl shadow-2xl w-72 
                flex flex-col items-center gap-3 border border-gray-100">
  
  {/* Profile Image */}
  <FaTimes onClick={hideUser} className='absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-red-500 transition duration-200' />
  <img
    src={user?.url}
    alt={user?.name}
    className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 shadow-md"
  />

  {/* User Info */}
  <div className="text-center">
    <p className="text-lg font-semibold text-gray-800">{user?.name}</p>
    <p className="text-sm text-gray-500">{user?.email}</p>
  </div>

  {/* Logout Button */}
  <button
    className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white font-medium 
               px-4 py-2 rounded-lg shadow transition duration-200"
               onClick={logout}
  >
    Logout
  </button>
</motion.div>

     </>
  )
}

export default User