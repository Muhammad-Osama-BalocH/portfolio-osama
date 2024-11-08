import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-800 text-gray-900 px-6 py-12" id='about'>
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-yellow-50">About Me</h2>

      {/* Description */}
      <p className="text-lg md:text-xl text-center max-w-2xl mb-12 animate-fade-in-up delay-150 text-white">
        I’m a passionate developer with expertise in web development, design, and mobile applications. My aim is to create impactful digital experiences that resonate with users.
      </p>

      {/* Skills Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl animate-fade-in-up delay-300">
        {/* Skill 1 */}
        <div className="flex flex-col items-center p-6 bg-slate-200 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <FaCode className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-center">
            Skilled in building responsive, dynamic websites using modern technologies and best practices.
          </p>
        </div>

        {/* Skill 2 */}
        <div className="flex flex-col items-center p-6 bg-slate-200 shadow-lg rounded-lg hover:scale-105 transition-transform duration-300">
          <FaPaintBrush className="text-4xl text-pink-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Design</h3>
          <p className="text-center">
            Dedicated to crafting user-friendly, visually appealing interfaces with a keen eye for detail.
          </p>
        </div>

        {/* Skill 3 */}
        <div className="flex flex-col items-center p-6 bg-slate-200 shadow-lg rounded-lg hover:scale-105 transition-transform duration-400">
          <FaMobileAlt className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
          <p className="text-center">
            Proficient in developing mobile applications that provide engaging, on-the-go user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
