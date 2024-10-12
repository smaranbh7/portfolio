  import React from 'react'
  import workImg from '../assets/projects/workImg.jpg'
  import Dice from '../assets/projects/dice.jpg'
  import Weather from '../assets/projects/weather.jpg'
  import Blog from '../assets/projects/blog.jpg'
  import Movie from '../assets/projects/movie.jpg'
  import mockProject from '../assets/projects/mockProject.jpg'

  const Work = () => {
    return (
      <div name='work' className='w-full min-h-screen text-gray-300 bg-[#0a192f] py-17'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div  className='pb-8'> 
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>Check out some of my recent works below:</p>
          </div>

          {/* Container*/}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*New Project */}
          <div style={{ backgroundImage: `url(${mockProject})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div ">
                  
                  {/*Hover Effect */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Ask Me (AI-powered Mock Interview Potal)
                    </span>
                    <div className="pt-8 text-center ">
                      <a href='https://github.com/smaranbh7/AI-Powered-Mock-Interview-Portal' rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg">Code</button>
                      </a>
                      <a href='https://ai-powred-mock-interview-portal.vercel.app/' rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>

                       {/*Project 1 */}

                <div style={{ backgroundImage: `url(${workImg})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div ">
                  
                  {/*Hover Effect */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Workout Buddy (Full-Stack)
                    </span>
                    <div className="pt-8 text-center ">
                      <a href='https://github.com/smaranbh7/Workout-app' rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project 2*/}
                <div style={{ backgroundImage: `url(${Dice})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div ">
                  
                  {/*Hover Effect */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Dice Game
                    </span>
                    <div className="pt-8 text-center ">
                      <a href='https://github.com/smaranbh7/DiceGame' rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project 3*/}
                <div style={{ backgroundImage: `url(${Weather})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div ">
                  
                  {/*Hover Effect */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Weather Application
                    </span>
                    <div className="pt-8 text-center ">
                      <a href='https://github.com/smaranbh7/weather-app' rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg">Code</button>
                      </a>
                      <a href='https://whatisweatherapp.netlify.app/' rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg">Demo</button>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project 4*/}
                <div style={{ backgroundImage: `url(${Blog})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div ">
                  
                  {/*Hover Effect */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Blog Post Application
                    </span>
                    <div className="pt-8 text-center ">
                      <a href='https://github.com/smaranbh7/The-Blog-Wall' rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Project 5*/}
                <div style={{ backgroundImage: `url(${Movie})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
                    flex justify-center text-center items-center mx-auto content-div ">
                  
                  {/*Hover Effect */}
                  <div className="opacity-0 group-hover:opacity-100 ">
                    <span className="text-2xl font bold text-white tracking-wider ">
                        Movie Application
                    </span>
                    <div className="pt-8 text-center ">
                      <a href='https://github.com/smaranbh7/Movie-app' rel="noopener noreferrer">
                        <button className="text-center rounded-lg px-4 py-3 m-2
                            bg-white text-gray-700 font-bold text-lg">Code</button>
                      </a>
                    </div>
                  </div>
                </div>
          </div>
        </div>
        
      </div>
    )
  }

  export default Work
