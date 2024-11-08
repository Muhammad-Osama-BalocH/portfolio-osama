import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Parallax Website: Developed a visually engaging parallax scrolling website with HTML and CSS for smooth transitions',
      link: 'https://parallex-website-create-by-osama.vercel.app/',
      imageUrl: '/parallax-pakistan-cover-image.jpg'
    },
    {
      title: 'Project 2',
      description: 'Portfolio Website: Created a personal portfolio using HTML, CSS, and JavaScript showcasing my technical skills and projects.',
      link: 'https://personal-portfolio-by-muhammad-osama.vercel.app/',
      imageUrl: '/portfoilo.png'
    },
    {
      title: 'Project 3',
      description: 'Calculator App (Next.js): Designed a functional calculator application using Next.js for quick and efficient calculations.',
      link: 'https://calculator-nextjs-osama-app.vercel.app',
      imageUrl: '/calculator.png'
    },
    {
      title: 'Project 4',
      description: 'To-Do List App (Next.js): Created a dynamic to-do list application with Next.js to manage daily tasks efficiently.',
      link: 'https://todolist-nextjs-create-by-osama.vercel.app/',
      imageUrl: '/todolist.png'
    },
    {
      title: 'Project 5',
      description: 'I developed the Figma project using Next.js, creating a responsive, high-performance web application with fast rendering and built-in SEO optimization features.',
      link: 'https://assignments4-figma-osama.vercel.app/',
      imageUrl: '/figma.png'
    },
    {
      title: 'Project 6',
      description: 'A Next.js project providing concise information on the Chikungunya virus, including symptoms, prevention, and treatment.',
      link: 'https://chicken-gunya-infomation-webpage.vercel.app/',
      imageUrl: '/chickunguniya.png'
    }
  ];

  return (
    <div className='bg-slate-500 min-h-screen flex flex-col items-center py-12 px-6' id='portfolio'>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up">
        My Portfolio
      </h2>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl animate-fade-in-up delay-150">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-200 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform duration-300"
          >
            {/* Project Image */}
            <Image
              src={project.imageUrl}
              alt={`${project.title} image`}
              width={500} // Set an appropriate width
              height={200} // Set an appropriate height
              className="w-full h-48 object-cover rounded-t-lg mb-4"
              priority={index === 0} // Prioritize the first image for better loading performance
            />
            
            {/* Project Details */}
            <div className="px-2">
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
