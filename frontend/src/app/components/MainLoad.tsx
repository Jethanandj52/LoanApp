"use client";

import { useState, useEffect } from "react";

export default function MainLoad() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 text-white p-6">
        <div className="text-8xl mb-6 animate-bounce">🚀</div>
        <h1 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to LoanVerse!
        </h1>
        <p className="text-lg font-medium drop-shadow-md">
          Preparing the best loan offers for you... 💰
        </p>
        <img
          src="https://cdn.dribbble.com/users/208935/screenshots/4464696/rocket.gif"
          alt="Loading Rocket"
          className="w-48 mt-10"
        />
      </div>
    );
  }

  
}
