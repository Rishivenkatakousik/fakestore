import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" flex flex-col overflow-hidden ">
      <section className="relative flex h-[calc(100vh-250px)]">
        {/* Left Section - White */}
        <div className="w-1/2 bg-white"></div>

        {/* Right Section - Yellow */}
        <div className="w-1/2 bg-yellow-300"></div>

        {/* Centered Content (Now Below Navbar) */}
        <div className="absolute inset-0 flex justify-center items-center text-center p-6 pointer-events-none">
          <div className="max-w-2xl pointer-events-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Welcome to <span className="underline">My Store</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-black mt-2">
              Your Shopping Destination
            </h2>
            <p className="text-gray-600 text-sm md:text-lg mt-4">
              Discover a wide range of products tailored just for you.{" "}
              <span className="text-yellow-500">Shop with ease</span> and find
              exactly what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="container flex flex-col items-center md:items-start bg-black text-white space-y-7 px-6 md:px-14 py-20 h-auto text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold max-w-xl">
          Discover Your Next Favourite Item
        </h1>
        <p className="max-w-xl text-sm md:text-base">
          Browse our exclusive collection and find the perfect product tailored
          just for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to={"/shop"}>
            <button className="bg-white text-black px-6 py-3 rounded-xl font-medium">
              Shop
            </button>
          </Link>
          <button className="bg-black text-white px-6 py-3 rounded-xl border border-white font-medium">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
