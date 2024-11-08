"use client"
import React, { useState, useEffect } from 'react';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Hero = () => {
  const titles = ["Frontend Developer", "UI/UX Designer", "Web Enthusiast"];
  const [loopText, setLoopText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150; // Faster when deleting, slower when typing

    const handleTyping = () => {
      setLoopText((prev) =>
        isDeleting ? prev.slice(0, -1) : titles[titleIndex].slice(0, charIndex + 1)
      );

      if (!isDeleting && charIndex === titles[titleIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && loopText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length); // Move to the next title
        setCharIndex(0); // Reset character index for typing
      } else {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    };

    const timeout = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, loopText, titleIndex, titles]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-black to-slate-950 text-white px-6 py-12">
      {/* Left Side - About and Icons */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I’m Muhammad Osama
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400">
          {loopText}
          <span className="animate-blink">|</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed">
          I'm a passionate developer with a strong foundation in web development and design, committed to crafting seamless user experiences and visually captivating interfaces. Let’s connect and explore opportunities to collaborate on innovative projects!
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4">
          <Link href="https://github.com/Muhammad-Osama-BalocH" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100021606721345" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:scale-110 transition-transform duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-osama-gabol-a0688328b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:scale-110 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="/osama.png" 
          alt="Profile"
          className="rounded-full w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;
