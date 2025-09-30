import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
                      src="/images/logo.png" // Public folder ka direct path
                      alt="Apna Fund Logo"
                      width={80}
                      height={40}
                      priority
                    />
            <h2 className="text-2xl font-bold text-blue-600">ApnaFund</h2>
          </div>
          <p className="text-sm leading-6">
            We provide the best loan services to help you achieve your dreams — home, business, education, and more.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"><FaFacebookF /></a>
            <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500"><FaTwitter /></a>
            <a href="#" className="bg-pink-500 text-white p-2 rounded-full hover:bg-pink-600"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-600">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Loan Services */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Loan Services</h3>
          <ul className="space-y-2">
            <li>Home Loan</li>
            <li>Business Loan</li>
            <li>Education Loan</li>
            <li>Wedding Loan</li>
            <li>Car Loan</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-blue-500 mt-1" /> +91 98765 43210
            </li>
            <li className="flex items-start gap-3">
              <FaEnvelope className="text-blue-500 mt-1" /> support@apnafund.com
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-500 mt-1" /> 123 Finance Street, New Delhi, India
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-600 py-4">
        <p className="text-center text-sm text-white">
          © {new Date().getFullYear()} ApnaFund. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
