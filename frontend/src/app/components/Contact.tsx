'use client';

import React, { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Contact = () => {
  const user = useSelector((state: any) => state.user.user);

  const [feedback, setFeedback] = useState("");

  const fullName = user?.name || "";
  const email = user?.email || "";

  async function sendMsg(e: React.FormEvent) {
    e.preventDefault();

    if (!fullName || !email) {
      alert("Please login before sending a message.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:7000/msg/addMessage', {
        name: fullName,
        email,
        message: feedback
      });

      console.log("Message sent:", res.data);
      alert('Your message was sent to the admin!');
      setFeedback("");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert('Failed to send message.');
    }
  }

  return (
    <section className="p-5 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Have questions or suggestions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        
        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-lg space-y-6 text-left">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-600 mt-1" size={22} />
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Address</h4>
              <p className="text-gray-600">123 Main Street, Karachi, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-blue-600 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Phone</h4>
              <p className="text-gray-600">+92 304 2507846</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-lg text-gray-900">Email</h4>
              <p className="text-gray-600">apnafund@gmail.com</p>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-semibold text-lg text-gray-900 mb-2">Follow Us</h4>
            <div className="flex gap-4 text-blue-600 text-xl">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6" onSubmit={sendMsg}>
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              value={fullName}
              disabled
              className="w-full border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows={2}
              placeholder="Write your message here..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
