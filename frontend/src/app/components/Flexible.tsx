import React from "react";

const Flexible = () => {
  return (
    <section className="  p-10  space-y-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/3 space-y-3">
          <h3 className="text-blue-600 font-semibold uppercase tracking-wide">
            Get to know About
          </h3>
          <h2 className="text-3xl font-bold leading-snug">
            Flexible and Quick Business Loans For You
          </h2>
        </div>
        <p className="md:w-2/3 text-gray-700 leading-relaxed">
          Turpis cursus in hac habitasse platea dictumst quisque. Aenean
          euismod elementum nisi quis eleifend quam adipiscing vitae proin.
          There are many variations of passages available but the majority have
          suffered alteration in some form, by injected humour or randomised
          words which don’t look even slightly believable. Nam aliquam sem et
          tortor consequat at urna mattis pellentesque.
        </p>
      </div>

      {/* Features Section */}
     <div className="flex flex-col sm:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">
  {/* Feature 1 */}
  <div className="flex items-center gap-5 bg-white rounded-lg shadow-md p-6 flex-1">
    <div className="flex-shrink-0 w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl">
      💰
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-1">Very Low Rates on All Loans</h4>
      <p className="text-gray-600 text-sm">Affordable interest rates tailored for you.</p>
    </div>
  </div>

  {/* Feature 2 */}
  <div className="flex items-center gap-5 bg-white rounded-lg shadow-md p-6 flex-1">
    <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-3xl">
      ✅
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-1">99.9% Success Rate Guarantee</h4>
      <p className="text-gray-600 text-sm">Trusted by thousands of satisfied customers.</p>
    </div>
  </div>

  {/* Feature 3 */}
  <div className="flex items-center gap-5 bg-white rounded-lg shadow-md p-6 flex-1">
    <div className="flex-shrink-0 w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center text-3xl">
      🔄
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-1">Flexible with Your Repayments</h4>
      <p className="text-gray-600 text-sm">Pay at your own pace with customized plans.</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Flexible;
