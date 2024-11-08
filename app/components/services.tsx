import React from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaDatabase } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode className="text-4xl text-blue-500 mb-4 animate-bounce-slow" />,
      title: 'Web Development',
      description: 'Building responsive, modern websites using the latest web technologies.'
    },
    {
      icon: <FaPaintBrush className="text-4xl text-pink-500 mb-4 animate-bounce-slow" />,
      title: 'UI/UX Design',
      description: 'Designing beautiful, user-centric interfaces for seamless user experiences.'
    },
    {
      icon: <FaDatabase className="text-4xl text-purple-500 mb-4 animate-bounce-slow" />,
      title: 'Graphic Designer',
      description: 'I have strong skills in graphic design, creating impactful visuals and layouts to effectively communicate messages through creative designs'
    }
  ];

  const skills = [
    { name: 'HTML5', percentage: 90 },
    { name: 'CSS3', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'TypeScript', percentage: 75 },
    { name: 'React.js', percentage: 85 },
    { name: 'Next.js', percentage: 80 },
  ];

  return (
    <div className="bg-blend-lighten min-h-screen flex flex-col items-center py-12 px-6" id="services">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 animate-fade-in-up">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl animate-fade-in-up delay-150 mb-12 bg-zinc-200">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-slate-200 shadow-lg rounded-lg p-10 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="max-w-6xl w-full">
        <h3 className="text-3xl font-semibold text-gray-900 mb-6">My Skills</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-gray-700 ">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
