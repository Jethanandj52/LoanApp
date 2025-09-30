"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaSearch, FaStore, FaUserLock } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa6";
import { useState } from "react";
import User from "./User";
 

const Nav = () => {
    const [ users,setUsers ] = useState(false);
  const router = useRouter();
      const user = useSelector((state: any) => state.user.user);
  

  function navigate(path: string) {
    router.push(path);
  }

  function fetchUserData() {
    setUsers(true)  
  }
  return (
    <nav className="flex justify-between items-center px-5 py-3 bg-gray-50 shadow border">
      {/* Logo */}
      <div className="flex items-center cursor-pointer" onClick={() => navigate("/home")}>
      <Image
  src="/images/logo.png"
  alt="Apna Fund Logo"
  width={80}
  height={40}
  priority
  style={{
    width: "100px",  // new width
    height: "auto"   // maintain ratio
  }}
/>

      </div>

      {/* Links */}
      <div className="flex gap-8 font-semibold text-blue-700">
        <span
          onClick={() => navigate("/home")}
          className="cursor-pointer hover:text-black transition"
        >
          Home
        </span>
        <span
          onClick={() => navigate("/category")}
          className="cursor-pointer hover:text-black transition"
        >
          Category
        </span>
        <span
          onClick={() => navigate("/about")}
          className="cursor-pointer hover:text-black transition"
        >
          About
        </span>
        <span
          onClick={() => navigate("/contact")}
          className="cursor-pointer hover:text-black transition"
        >
          Contact
        </span>
      </div>

      {/* Icons */}
      <div className="flex gap-6 text-xl text-blue-700">
        <FaSearch className="cursor-pointer hover:text-black transition" />
        <FaStore className="cursor-pointer hover:text-black transition" />
      {
  user 
    ? <FaUser className="cursor-pointer hover:text-black transition" onClick={fetchUserData} /> 
    : <FaUserLock className="cursor-pointer hover:text-black transition" />
}

      </div>
            {/* {showLogin &&  <Popup/>} */}
            {
              users && <User hideUser={() => setUsers(false)} />
            }
    </nav>
  );
};

export default Nav;
