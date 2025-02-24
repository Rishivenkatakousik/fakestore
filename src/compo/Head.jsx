import { useState } from "react";
import { MdKeyboardArrowDown, MdMenu, MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useSelector((state) => state);
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/shop?search=${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <nav className="bg-yellow-400 flex items-center justify-between px-6 md:px-10 py-4 relative">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-black font-bold text-lg">Harmoni</h1>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <MdClose /> : <MdMenu />}
      </button>

      {/* Desktop Navigation & Search */}
      <div className="hidden md:flex gap-5 items-center">
        {/* Navigation Links */}
        <div className="hidden md:flex space-x-5 text-black">
          <Link to="/">
            <p>Home Page</p>
          </Link>
          <Link to="/shop">
            <p>Categories</p>
          </Link>
          <p className=" cursor-pointer">Contact Us</p>
          <p className=" flex items-center cursor-pointer">
            More Options <MdKeyboardArrowDown className="h-6 w-6" />
          </p>
        </div>

        {/* Search Bar */}
        {/* <Link to={"/shop"}> */}
        <div className="flex items-center bg-white rounded-lg px-4 py-2">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none bg-transparent w-40 md:w-60 text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="text-black cursor-pointer border-l border-gray-500 pl-2"
            onClick={handleSearch}
          >
            <CiSearch />
          </button>
        </div>
        {/* </Link> */}

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <button className="relative">
            <FaCartShopping className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-1 rounded-full">
              {cart?.length || 0}
            </span>
          </button>
          <button className="bg-black text-white rounded-full p-2">
            <IoPerson />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Fix Applied) */}
      <div
        className={`absolute top-full left-0 w-full bg-yellow-400 flex flex-col items-center space-y-4 py-6 md:hidden transition-transform duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 50 }}
      >
        <a href="#" className="text-black text-lg">
          Home Page
        </a>
        <a href="#" className="text-black text-lg">
          Categories
        </a>
        <a href="#" className="text-black text-lg">
          Contact Us
        </a>
        <a href="#" className="text-black text-lg flex items-center">
          More Options <MdKeyboardArrowDown className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Head;
