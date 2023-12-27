import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 text-white py-4 px-6 md:px-16 flex items-center justify-between">
      <div className="flex items-center">
        <a href="/" className="font-bold text-2xl">
          Amit & Kumar LLP
        </a>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex md:space-x-6 flex-col md:flex-row items-center mt-4 md:mt-0`}
      >
        <li>
          <a href="/" className="hover:text-green-900">
            Home
          </a>
        </li>
        <li>
          <a href="/services" className="hover:text-green-900">
            Services
          </a>
        </li>
        <li>
          <a href="/team" className="hover:text-green-900">
            Team
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-green-900">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
