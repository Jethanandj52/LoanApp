"use client";
import { useState } from "react";
import Login from "../(auth)/login/Login";
import Loan from "@/app/components/Loan";

export default function Popup() {
  const [showLogin, setShowLogin] = useState(true);
  const [showLoan, setShowLoan] = useState(false);

  return (
    <>
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLoginSuccess={() => {
            setShowLogin(false); // Login popup band
            setShowLoan(true);   // Loan popup on
          }}
        />
      )}

      {showLoan && (
        <Loan onClose={() => setShowLoan(false)} />
      )}
    </>
  );
}
