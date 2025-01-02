import React from 'react';
import myPhoto from '../assets/myPhoto.png';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a192f] text-gray-300 py-10'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>A Passionate Computer Science Student</p>
            {/* Image Section */}
            <img
              src={myPhoto}
              alt="Profile"
              className='mt-4 w-150 h-2000 mx-auto object-cover'
            />
          </div>

          <div>
            {/* Text Section */}
            <p>
              I am 21-years old, originally from Nepal, currently based on Kentucky, United States. I am a third-year student at Northern Kentucky University majoring in Computer Science with a minor in Information Technology. I am currently learning backend (Node.js) and exploring full-stack web development. I love watching and playing Soccer. I am a big Cristiano Ronaldo & Real Madrid fan. One fun fact about me is that I can play guitar.
            </p>
            <br />
            <p>
              I was introduced to HTML and CSS in my junior year of high school. In my senior year, I was introduced to the 'C' programming language where I wrote my first 'Hello World' statement. After my high school graduation, I spent time learning Python and concepts like Object-Oriented Programming (using Python). Then I was introduced to Java in college and got a chance to learn Data Structures & Algorithms (using Java). In the middle of my sophomore year, I got interested in development and started learning web development technologies. Since I had experience with HTML/CSS and a base in JavaScript, I started learning React and building front-end projects. After mastering React, I am currently focused on learning Node/Next Js.
              <br/><br/>
              I served as Teaching Assistant for Introduction to Web Development (INF-120) in College of Informatics at 
              Northern Kentucky University last semsester(Fall 2024). I am currently serving as a Research Assistant at HCI Lab led by Prof Dr.Nicholas Caporusso.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
