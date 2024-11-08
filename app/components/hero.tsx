"use client"
import React, { useState, useEffect } from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  const [loopText, setLoopText] = useState("Frontend Developer");
  const titles = ["Frontend Developer", "UI/UX Designer", "Web Enthusiast"];
  let titleIndex = 0;

  // Looping text effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      titleIndex = (titleIndex + 1) % titles.length;
      setLoopText(titles[titleIndex]);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black to-slate-950 text-white px-4 md:px-8">
      {/* Left Side - About and Icons */}
      <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up">
          Hi, I’m Muhammad Osama
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-400 animate-fade-in-up delay-150">
          {loopText}
        </h2>
        <p className="text-lg md:text-xl font-light animate-fade-in-up delay-300">
          I'm a passionate developer with a strong foundation in web development and design, committed to crafting seamless user experiences and visually captivating interfaces. With a knack for transforming ideas into fully functional and aesthetic digital products, I thrive on challenges and continuous learning.
          <br />
          Let’s connect and explore opportunities to collaborate on innovative projects!
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-4 animate-fade-in-up delay-500">
          <Link href="https://github.com/Muhammad-Osama-BalocH" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform duration-300">
            <FaGithub />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100021606721345" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform duration-300">
            <FaFacebook />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-osama-gabol-a0688328b/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:scale-110 transition-transform duration-300">
            <FaLinkedin />
          </Link>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0 animate-fade-in-up delay-700">
        <img
          src="/osama.png" 
          alt="Profile"
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;
