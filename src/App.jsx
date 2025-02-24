import { Route, Routes } from "react-router-dom";
import Head from "./compo/Head";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <div className=" bg-slate-900">
        <Head />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
