import Footer from "./compo/Footer";
import Head from "./compo/Head";
import Hero from "./compo/Hero";
import Products from "./compo/Products";
import Services from "./compo/Services";

export default function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Head />
      <Hero />
      <Products />
      <Services />
      <Footer />
    </div>
  );
}
