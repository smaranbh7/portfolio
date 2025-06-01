import React from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/myPhoto.png';
import { FaGraduationCap, FaCode, FaFlask, FaGuitar } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto p-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-12'
        >
          <h2 className='text-4xl font-bold mb-4 text-[#ccd6f6]'>About Me</h2>
          <div className='w-20 h-1 bg-[#64ffda] mx-auto'></div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-8'>
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex justify-center md:justify-start'
          >
            <img
              src={myPhoto}
              alt="My Photo"
              className='rounded-lg w-full max-w-[300px] h-auto object-cover shadow-lg'
            />
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='space-y-6'
          >
            {/* Education */}
            <div className='flex items-start space-x-4'>
              <FaGraduationCap className='text-[#64ffda] text-2xl mt-1' />
              <div>
                <h3 className='text-xl font-semibold mb-2 text-[#ccd6f6]'>Education</h3>
                <p>
                  Computer Science senior at Northern Kentucky University with a minor in Mathematics and Information Technology.
                </p>
              </div>
            </div>

            {/* Technical Journey */}
            <div className='flex items-start space-x-4'>
              <FaCode className='text-[#64ffda] text-2xl mt-1' />
              <div>
                <h3 className='text-xl font-semibold mb-2 text-[#ccd6f6]'>Technical Journey</h3>
                <p>
                  Passionate about full-stack development, with a strong foundation in Java, Python, and JavaScript. Currently exploring cloud technologies and microservices architecture.
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className='flex items-start space-x-4'>
              <MdWork className='text-[#64ffda] text-2xl mt-1' />
              <div>
                <h3 className='text-xl font-semibold mb-2 text-[#ccd6f6]'>Experience</h3>
                <p>
                  Software Engineering Intern at Kroger Technology & Digital, working on enterprise-level applications and cloud solutions.
                </p>
              </div>
            </div>

            {/* Current Focus */}
            <div className='flex items-start space-x-4'>
              <FaFlask className='text-[#64ffda] text-2xl mt-1' />
              <div>
                <h3 className='text-xl font-semibold mb-2 text-[#ccd6f6]'>Current Focus</h3>
                <p>
                  Exploring modern web technologies and cloud platforms while maintaining a strong focus on software architecture and best practices.
                </p>
              </div>
            </div>

            {/* Personal */}
            <div className='flex items-start space-x-4'>
              <FaGuitar className='text-[#64ffda] text-2xl mt-1' />
              <div>
                <h3 className='text-xl font-semibold mb-2 text-[#ccd6f6]'>Personal</h3>
                <p>
                  21-year-old from Nepal, passionate about technology and its potential to create positive change. Enjoy playing guitar and exploring new technologies in free time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
