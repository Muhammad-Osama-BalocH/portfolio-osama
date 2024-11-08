import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Name and Social Links */}
        <h3 className="text-xl font-semibold text-white">Muhammad Osama</h3>
        
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/profile.php?id=100021606721345"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-osama-gabol-a0688328b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/Muhammad-Osama-BalocH"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Muhammad Osama. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
