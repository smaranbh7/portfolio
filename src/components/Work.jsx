import React from "react";
import workImg from "../assets/projects/workImg.jpg";
import Dice from "../assets/projects/dice.jpg";
import Weather from "../assets/projects/weather.jpg";
import Blog from "../assets/projects/blog.jpg";
import Movie from "../assets/projects/movie.jpg";
import mockProject from "../assets/projects/mockProject.jpg";
import CancerPredction from "../assets/cancer_prediction.png";
import NasaEpicImage from "../assets/NasaApp.jpg";
import Ecommerce from "../assets/e-commerce.png";
import BloodBond from "../assets/bloodBond.png";
import ProjectManagement from  "../assets/projectManagement.png"

const Work = () => {
  return (
    <div
      id="work"
      name="work"
      className="w-full min-h-screen text-gray-300 bg-[#0a192f] py-17"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#64ffda]">
            Work
          </p>
          <p className="py-6">Check out some of my recent works below:</p>
        </div>

        {/* Container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*New Project */}
          <div
            style={{ backgroundImage: `url(${mockProject})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Ask Me (AI-powered Mock Interview Potal)
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/Ask-Me"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a
                  href="https://ask-me-delta-ten.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${ProjectManagement})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
               Project Management System (Full-Stack)
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/Project-Management-System"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${BloodBond})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Blood Bond - Hackathon Project
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://www.linkedin.com/posts/smaranbhattarai_bloodbond-healthcareinnovation-emergencycare-activity-7308211993784565762-yftN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0AT1MBpMH3Yi15zn6ztAeP-mlQ0m6rQv0"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
                  >
                    Link
                  </button>
                </a>
                <a
                  href="https://project-hackathon-uutj.vercel.app/"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${CancerPredction})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Cancer Prediction With Machine Learning
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/Cancer-Prediction-With-ML"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a
                  href="https://cancer-prediction-with-ml-7biyrxatrrjnimet5zxnc7.streamlit.app/"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Ecommerce})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Ecommerce Backend - Spring Boot
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/Ecommerce"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/*Project  */}

          <div
            style={{ backgroundImage: `url(${workImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Workout Buddy (Full-Stack)
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/Workout-app"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project */}
          
          <div
            style={{ backgroundImage: `url(${Dice})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Dice Game
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/DiceGame"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project */}
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Weather Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/weather-app"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                <a
                  href="https://whatisweatherapp.netlify.app/"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project */}
          <div
            style={{ backgroundImage: `url(${Blog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Blog Post Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/The-Blog-Wall"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Project */}
          <div
            style={{ backgroundImage: `url(${Movie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                Movie Application
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/Movie-app"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          {/* Project */}
          <div
            style={{ backgroundImage: `url(${NasaEpicImage})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
          >
            {/*Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font bold text-white tracking-wider ">
                NASA EPIC Image - Kotlin App
              </span>
              <div className="pt-8 text-center ">
                <a
                  href="https://github.com/smaranbh7/NASAEpicImage-KotlinApp"
                  rel="noopener noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                      bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Work;
