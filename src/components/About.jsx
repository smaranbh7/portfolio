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

        <div className='grid md:grid-cols-2 gap-12 items-start'>
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='sticky top-24'
          >
            <img
              src={myPhoto}
              alt="Smaran Bhattarai"
              className='rounded-lg w-full h-auto shadow-lg'
              style={{ maxHeight: '600px', objectFit: 'cover', objectPosition: 'center' }}
            />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className='space-y-6'>
              <div className='flex items-center space-x-3'>
                <FaGraduationCap className='text-[#64ffda] text-2xl' />
                <h3 className='text-xl font-semibold text-[#ccd6f6]'>Education</h3>
              </div>
              <p className='text-[#8892b0] pl-9'>
                Computer Science Senior at Northern Kentucky University with minors in Mathematics and Information Technology.
                Originally from Nepal, now based in Kentucky, United States.
              </p>

              <div className='flex items-center space-x-3'>
                <FaCode className='text-[#64ffda] text-2xl' />
                <h3 className='text-xl font-semibold text-[#ccd6f6]'>Technical Journey</h3>
              </div>
              <p className='text-[#8892b0] pl-9'>
                Started with HTML/CSS in high school, progressed through C, Python (OOP), and Java (Data Structures & Algorithms).
                Currently focused on full-stack development with React, Node.js, Spring Boot, and Next.js.
              </p>

              <div className='flex items-center space-x-3'>
                <MdWork className='text-[#64ffda] text-2xl' />
                <h3 className='text-xl font-semibold text-[#ccd6f6]'>Experience</h3>
              </div>
              <p className='text-[#8892b0] pl-9'>
                Teaching Assistant for Web Development (INF-120) at NKU's College of Informatics.
                Currently serving as a Research Assistant at the HCI Lab under Prof. Dr. Nicholas Caporusso.
              </p>

              <div className='flex items-center space-x-3'>
                <FaFlask className='text-[#64ffda] text-2xl' />
                <h3 className='text-xl font-semibold text-[#ccd6f6]'>Current Focus</h3>
              </div>
              <p className='text-[#8892b0] pl-9'>
                Exploring backend development with Spring Boot and diving deeper into full-stack web development.
                Passionate about creating exceptional digital experiences.
              </p>

              <div className='flex items-center space-x-3'>
                <FaGuitar className='text-[#64ffda] text-2xl' />
                <h3 className='text-xl font-semibold text-[#ccd6f6]'>Personal</h3>
              </div>
              <p className='text-[#8892b0] pl-9'>
                Soccer enthusiast and Cristiano Ronaldo & Real Madrid fan. Guitar player in my free time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
