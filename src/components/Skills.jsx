import React from 'react';
import { motion } from 'framer-motion';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import Python from '../assets/python.png';
import C from '../assets/c.png';
import Java from '../assets/java.png';
import NextImg from '../assets/nextjs.png'; // Using the downloaded Next.js PNG
import Docker from '../assets/docker.png';
import AWS from '../assets/aws.png';
import Azure from '../assets/azure.png';
import Postman from '../assets/postman.png';
import Jira from '../assets/jira.png';
import PostgreSQL from '../assets/postgresql.png';
import MySQL from '../assets/mysql.png';
import Oracle from '../assets/oracle.png';
import Spring from '../assets/spring.png';
import Express from '../assets/express.png';
import Kotlin from '../assets/kotlin.png';
import SQL from '../assets/sql.png';
import Pandas from '../assets/pandas.png';
import Scikit from '../assets/scikit.png';

const skillCategories = {
  'Languages': [
    { name: 'Java', icon: Java, description: 'Object-oriented programming, Enterprise applications backend, Data structures & algorithms' },
    { name: 'Python', icon: Python, description: 'Data analysis, Machine learning' },
    { name: 'C/C++', icon: C, description: 'Systems programming' },
    { name: 'JavaScript', icon: JavaScript, description: 'ES6+, Full-stack development' },
    { name: 'HTML/CSS', icon: HTML, description: 'Semantic markup, Responsive design' },
    { name: 'SQL', icon: SQL, description: 'Database querying and management' },
    { name: 'Kotlin', icon: Kotlin, description: 'Android development' },
  ],
  'Frameworks & Libraries': [
    { name: 'Spring Boot', icon: Spring, description: 'Enterprise Java backend framework, Microservices' },
    { name: 'Next.js', icon: NextImg, description: 'Server-side rendering, Full-stack React' },
    { name: 'React', icon: ReactImg, description: 'Frontend development, Component-based architecture' },
    { name: 'Node.js', icon: Node, description: 'Backend JavaScript runtime' },
    { name: 'Express', icon: Express, description: 'Web application framework for Node.js' },
    { name: 'Pandas', icon: Pandas, description: 'Data manipulation and analysis' },
    { name: 'Scikit-learn', icon: Scikit, description: 'Machine learning library for Python' },
    { name: 'Tailwind', icon: Tailwind, description: 'Utility-first CSS framework' },
  ],
  'Developer Tools & Technologies': [
    { name: 'Git', icon: GitHub, description: 'Version control, Collaboration' },
    { name: 'Docker', icon: Docker, description: 'Containerization, Deployment' },
    { name: 'AWS', icon: AWS, description: 'Cloud services, Deployment' },
    { name: 'Azure', icon: Azure, description: 'Cloud platform, Services' },
    { name: 'Postman', icon: Postman, description: 'API testing and documentation' },
    { name: 'Jira', icon: Jira, description: 'Project management, Agile workflow' },
  ],
  'Databases': [
    { name: 'MongoDB', icon: Mongo, description: 'NoSQL database, Document store' },
    { name: 'PostgreSQL', icon: PostgreSQL, description: 'Relational database, Advanced queries' },
    { name: 'MySQL', icon: MySQL, description: 'Relational database management' },
    { name: 'Oracle', icon: Oracle, description: 'Enterprise database solutions' },
  ]
};

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-16'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-4xl font-bold mb-2'>Technical Skills</h2>
          <p className='py-4 text-gray-400'>Comprehensive overview of my technical expertise:</p>
        </motion.div>

        <div className='w-full'>
          {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className='mb-8'
            >
              <h3 className='text-2xl font-semibold text-[#64ffda] mb-4'>{category}</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className='group relative bg-[#112240] rounded-lg p-6 hover:bg-[#1d3461] transition-all duration-300'
                  >
                    <div className='flex flex-col items-center'>
                      <img 
                        className='w-16 mb-3 group-hover:scale-110 transition-transform duration-300' 
                        src={skill.icon} 
                        alt={`${skill.name} icon`}
                        style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                      />
                      <p className='font-medium'>{skill.name}</p>
                      
                      {/* Hover Description */}
                      <div className='absolute inset-0 flex items-center justify-center bg-[#0a192f] bg-opacity-90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <p className='text-sm text-center px-4'>{skill.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
  