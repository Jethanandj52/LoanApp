import React from "react";
import { FaHandshake, FaUserTie, FaAward, FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We are a trusted financial services provider helping individuals and businesses achieve their dreams through flexible and fast loan solutions.
        </p>
      </div>

      {/* About Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://www.shutterstock.com/image-photo/male-mature-caucasian-ceo-businessman-600nw-2142010187.jpg"
          alt="About Us"
          className="rounded-lg shadow-lg"
        />
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
          <p className="text-gray-600">
            With years of experience in the financial industry, our mission is to provide hassle-free, quick, and transparent loan solutions that empower our clients to grow and succeed.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Trusted by thousands of happy customers
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Transparent process with no hidden charges
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              Quick approvals and flexible repayment plans
            </li>
          </ul>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaHandshake className="text-blue-600 text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To make financial support accessible to everyone by providing fast, affordable, and reliable loan services.
          </p>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
          <FaUserTie className="text-blue-600 text-4xl mb-3" />
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To be the most trusted financial partner that helps individuals and businesses achieve their goals.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <FaAward className="text-yellow-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold">Award Winning Service</h3>
            <p className="text-gray-600">Recognized for excellence in financial services.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <FaHandshake className="text-blue-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold">Trusted Partner</h3>
            <p className="text-gray-600">Thousands of satisfied customers nationwide.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <FaUserTie className="text-green-500 text-4xl mb-3" />
            <h3 className="text-lg font-semibold">Expert Guidance</h3>
            <p className="text-gray-600">Professional advice tailored to your needs.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default AboutUs;
