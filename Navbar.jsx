import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-3 px-5 flex justify-between items-center rounded-xl mt-3 mx-3 sticky top-0 z-50 transition-all duration-300">
    
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/Vs_logo.png"
            alt="Website Logo"
            className="w-28 h-auto object-contain" 
          />
        </Link>
      </div>

    
      <ul className="hidden md:flex space-x-10 text-gray-800 font-semibold text-lg tracking-wide">
        <li>
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            SHOP
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            CONTACT
          </Link>
        </li>
      </ul>

  
      <div className="hidden md:flex items-center space-x-5 text-gray-700 font-medium">
        <Link to="/cart" className="hover:text-blue-600 transition">
          <FaShoppingCart size={20} />
        </Link>
        <Link
          to="/login"
          className="bg-gray-100 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition font-medium"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium"
        >
          Sign Up
        </Link>
      </div>

      
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

    
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md rounded-b-xl flex flex-col items-center space-y-5 py-6 md:hidden">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition"
          >
            Shop
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-800 text-lg font-semibold hover:text-blue-600 transition"
          >
            Contact
          </Link>

          <div className="flex space-x-4 mt-4">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="bg-gray-100 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white transition font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

