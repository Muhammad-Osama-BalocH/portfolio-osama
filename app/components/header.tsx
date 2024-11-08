"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-4 py-3 bg-gray-900 text-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Name */}
        <div className="text-2xl font-semibold">
          <Link href="/" className="hover:text-blue-400 transition duration-300">
            Osama
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:flex-grow md:justify-end space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <li className="hover:scale-105 transition-transform duration-300">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="hover:scale-105 transition-transform duration-300">
              <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li className="hover:scale-105 transition-transform duration-300">
              <Link href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link>
            </li>
            <li className="hover:scale-105 transition-transform duration-300">
              <Link href="#services" onClick={() => setIsOpen(false)}>Services</Link>
            </li>
            <li className="hover:scale-105 transition-transform duration-300">
              <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>

            {/* Download CV Button */}
            <li className="hover:scale-105 transition-transform duration-300">
              <Link
                href="/cv.pdf.png" // Link to the CV file
                download="Muhammad_Osama_CV.pdf" // File name on download
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Download CV
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
