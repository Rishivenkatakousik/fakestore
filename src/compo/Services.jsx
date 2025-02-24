import React from "react";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-24 px-10 py-20">
      {/* Feature 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-200 rounded-full p-4">
          <FaShippingFast className="text-3xl text-black" />
        </div>
        <h3 className="font-bold text-lg mt-3">FREE AND FAST DELIVERY</h3>
        <p className="text-gray-600">Free delivery for all orders over $140</p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-200 rounded-full p-4">
          <FaHeadset className="text-3xl text-black" />
        </div>
        <h3 className="font-bold text-lg mt-3">24/7 CUSTOMER SERVICE</h3>
        <p className="text-gray-600">Friendly 24/7 customer support</p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-gray-200 rounded-full p-4">
          <FaUndo className="text-3xl text-black" />
        </div>
        <h3 className="font-bold text-lg mt-3">MONEY BACK GUARANTEE</h3>
        <p className="text-gray-600">We return money within 30 days</p>
      </div>
    </div>
  );
};

export default Services;
