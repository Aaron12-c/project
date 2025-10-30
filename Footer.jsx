import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 text-gray-100 py-12 mt-16 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo and About */}
        <div>
          <div className="flex items-center justify-start mb-4">
            {/* ✅ Your logo image goes here */}
            <img
              src="/V-CLASS PNG..png" // make sure it's in your public folder
              alt="Logo"
              className="w-24 h-24 object-contain drop-shadow-lg"
            />
          </div>

          <p className="text-gray-300 leading-relaxed">
            Your trusted source for premium car parts. 
            We deliver durability, performance, and reliability 
            for every vehicle need.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
          <p className="text-gray-300 mb-4">
            Email: support@carpath.com <br />
            Phone: +234 800 123 4567
          </p>

          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-pink-500 p-2 rounded-full transition"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-sky-500 p-2 rounded-full transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="https://wa.me/2348001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-green-500 p-2 rounded-full transition"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
