import Footer from "@/compo/Footer";
import Hero from "@/compo/Hero";
import Products from "@/compo/Products";
import Services from "@/compo/Services";
import React from "react";
// import Footer from "./compo/Footer";

// import Hero from "./compo/Hero";
// import Products from "./compo/Products";
// import Services from "./compo/Services";

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Hero />
      <Products />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
