import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import ParticlesBackground from './ParticlesBackground';

const Home = () => {
  return (
    <div id='home' name='home' className='relative w-full h-screen overflow-hidden'>
      <ParticlesBackground />
      
      {/* Main Content */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className='text-pink-600 text-lg font-mono'>Hi, my name is</p>
          <motion.h1 
            className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] mt-2'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Smaran Bhattarai
          </motion.h1>
          <motion.h2 
            className='text-4xl sm:text-7xl font-bold text-[#8892b0] mt-2'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I'm a Full Stack Developer.
          </motion.h2>
          <motion.p 
            className='text-[#8892b0] py-4 max-w-[700px] text-lg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I'm a full-stack developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building responsive full-stack web applications using MERN Stack.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link 
              to="work" 
              smooth={true} 
              duration={500} 
              offset={-80}
              className="inline-block"
            >
              <button className='text-[#64ffda] group border-2 border-[#64ffda] px-6 py-3 my-2 flex items-center hover:bg-[#64ffda] hover:bg-opacity-10 transition-all duration-300'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
