import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>A Passionate Computer Science Student Seeking Internship Opportunities To Expand Skills In Software Development and Innovation.</p>
            </div>
            <div>
              <p>I am 21-years old ,originally from Nepal, currently based on Kentucky, United States. I am a third year student at Northern Kentucky University majoring
                in Computer Science with minor in Information Technology. I am currently learnig backend (node js) and exploring full stack web developemt. I 
                love watching and playing Soccer. I am a big Cristiano Ronaldo & Real Madrid fan. One fun fact about me is that I can play 
                guitar. <br/>  <br/>I was introduced with HTML and CSS in my junior year of high school. In my senior year, I was introduced
                with 'C' programming language where I wrote my first 'Hello World' statement. After my high school graduation, I spent time learning 
                Python and concepts like Object-Oriented Programming (using Python). Then I was introduced with Java in my college and got 
                chance to learn concepts like Data-Structues & Algorithm (using Java). In the middle of my Sophomore year, I got interest in developemnt
                and started learning web development technologies. Since, I had experience of HTMl/CSS and base of JavaScript, I started 
                learnig React framework and making front-end projects. After having good base of React, I am currently mastering backend learning
                node, express frame-work and Mongodb.
                   </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
