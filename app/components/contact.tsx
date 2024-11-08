import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-slate-800 min-h-screen flex flex-col items-center py-12 px-6" id='contact'>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-fade-in-up">
        Contact Me
      </h2>

      {/* Contact Form and Contact Info */}
      <div className="w-full max-w-4xl  bg-slate-700c  shadow-lg rounded-lg p-8 animate-fade-in-up delay-150">
        <p className="text-center text-black mb-6">
          I would love to connect! Reach out for collaborations, projects, or just a friendly chat.
        </p>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:space-x-8 mb-10">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-white text-lg">
              <FaEnvelope className="inline-block mr-2 text-blue-400" /> balochosama786786786@gmail.com
            </p>
            <p className="text-white text-lg">
              <FaPhoneAlt className="inline-block mr-2 text-green-400" /> +92 03482899627
            </p>
            <p className="text-white text-lg">
              Address:Abul Hasan Isphani road Karachi, Pakistan
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-6 md:mt-0">
            <Link href="https://www.facebook.com/profile.php?id=100021606721345" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition duration-300 text-2xl">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="https://twitter.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition duration-300 text-2xl">
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-osama-gabol-a0688328b/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition duration-300 text-2xl">
                <FaLinkedinIn />
              </a>
            </Link>
            <Link href="https://github.com" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition duration-300 text-2xl">
                <FaGithub />
              </a>
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
