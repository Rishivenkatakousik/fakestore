import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-16 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 w-[70%]">
        {/* Exclusive Section */}
        <div className="w-[180px]">
          <h3 className="font-bold text-lg">Exclusive</h3>
          <p className="mt-2">Subscribe</p>
          <p className="text-gray-400">Get 10% off your first order</p>
          <div className="flex items-center mt-2 border border-gray-400 p-2 rounded">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 w-20"
            />
            <FaArrowRight className="text-white" />
          </div>
        </div>

        {/* Support Section */}
        <div className="w-[180px] space-y-1">
          <h3 className="font-bold text-lg">Support</h3>
          <p className="text-gray-400">1234, Park Street, DL-1111, India.</p>
          <p className="text-gray-400">Test@testmail.com</p>
          <p className="text-gray-400">+91-999-999-9999</p>
        </div>

        {/* Account Section */}
        <div className="w-[180px]">
          <h3 className="font-bold text-lg">Account</h3>
          <ul className="text-gray-400 space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="w-[180px]">
          <h3 className="font-bold text-lg">Quick Link</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-8">
        &copy; Copyright Harmoni 2025. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
