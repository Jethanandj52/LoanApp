import React from "react";

const Service = () => {
  const services = [
    {
      name: "Home Loan",
      icon: "🏠",
      description:
        "Get the best home loan options tailored to your needs with low interest rates.",
    },
    {
      name: "Education Loan",
      icon: "🎓",
      description:
        "Finance your education with easy repayment plans and competitive rates.",
    },
    {
      name: "Wedding Loan",
      icon: "💍",
      description:
        "Make your special day memorable with our flexible wedding loan plans.",
    },

    {
      name: "Business Loan",
      icon: "💼",
      description:
        "Expand your business with our customized business loan options and support.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-600">What We're Offering</h2>
        <p className="text-gray-700 mt-2 text-lg">All Loan Services</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {services.map(({ name, icon, description }) => (
          <div
            key={name}
            className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
          >
            <div className="text-6xl mb-6">{icon}</div>
            <h3 className="text-xl font-semibold mb-4">{name}</h3>
            <p className="text-gray-600 flex-grow mb-6">{description}</p>
            <button className="bg-green-500 cursor-pointer active:scale-90  text-white rounded-full px-6 py-2 font-semibold hover:bg-green-600 transition-all duration-300">
              View Detail
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
