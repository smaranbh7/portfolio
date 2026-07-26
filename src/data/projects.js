import mockProject from "../assets/projects/mockProject.jpg";
import ProjectManagement from "../assets/projectManagement.png";
import CancerPrediction from "../assets/cancer_prediction.png";
import Ecommerce from "../assets/e-commerce.png";
import ConcertApp from "../assets/ConcertApp.png";
import BloodBond from "../assets/bloodBond.png";
import workImg from "../assets/projects/workImg.jpg";
import Dice from "../assets/projects/dice.jpg";
import Weather from "../assets/projects/weather.jpg";
import Blog from "../assets/projects/blog.jpg";
import Movie from "../assets/projects/movie.jpg";
import NasaEpicImage from "../assets/NasaApp.jpg";

export const featuredProjects = [
  {
    id: "ask-me",
    name: "Ask Me",
    description:
      "AI-powered mock interview portal that runs candidates through realistic interview questions and feedback.",
    image: mockProject,
    tags: ["React", "AI", "Vercel"],
    github: "https://github.com/smaranbh7/Ask-Me",
    live: "https://ask-me-delta-ten.vercel.app/",
  },
  {
    id: "project-management-system",
    name: "Project Management System",
    description:
      "Full-stack app for tracking projects, tasks, and teams from a single dashboard.",
    image: ProjectManagement,
    tags: ["Full-Stack", "React"],
    github: "https://github.com/smaranbh7/Project-Management-System",
  },
  {
    id: "cancer-prediction-ml",
    name: "Cancer Prediction with ML",
    description:
      "Machine learning model that predicts cancer diagnosis from clinical data, served through a Streamlit app.",
    image: CancerPrediction,
    tags: ["Python", "Machine Learning", "Streamlit"],
    github: "https://github.com/smaranbh7/Cancer-Prediction-With-ML",
    live: "https://cancer-prediction-with-ml-7biyrxatrrjnimet5zxnc7.streamlit.app/",
  },
  {
    id: "ecommerce-backend",
    name: "Ecommerce Backend",
    description:
      "REST API backend for an ecommerce platform built with Spring Boot.",
    image: Ecommerce,
    tags: ["Java", "Spring Boot", "Backend"],
    github: "https://github.com/smaranbh7/Ecommerce",
  },
];

export const archiveProjects = [
  {
    id: "find-concert-pal",
    name: "Find Concert Pal",
    description: "Find friends to go to concerts with.",
    image: ConcertApp,
    tags: ["Full-Stack"],
    github: "https://github.com/smaranbh7/FindConcertPal",
  },
  {
    id: "blood-bond",
    name: "Blood Bond",
    description: "Hackathon project connecting blood donors with patients in need.",
    image: BloodBond,
    tags: ["Hackathon", "Healthcare"],
    github:
      "https://www.linkedin.com/posts/smaranbhattarai_bloodbond-healthcareinnovation-emergencycare-activity-7308211993784565762-yftN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0AT1MBpMH3Yi15zn6ztAeP-mlQ0m6rQv0",
    githubLabel: "Post",
    live: "https://project-hackathon-uutj.vercel.app/",
  },
  {
    id: "workout-buddy",
    name: "Workout Buddy",
    description: "Full-stack app for logging workouts and tracking progress over time.",
    image: workImg,
    tags: ["Full-Stack"],
    github: "https://github.com/smaranbh7/Workout-app",
  },
  {
    id: "dice-game",
    name: "Dice Game",
    description: "Browser dice game built with vanilla JavaScript.",
    image: Dice,
    tags: ["JavaScript"],
    github: "https://github.com/smaranbh7/DiceGame",
  },
  {
    id: "weather-app",
    name: "Weather Application",
    description: "Live weather lookup by city using a public weather API.",
    image: Weather,
    tags: ["JavaScript", "API"],
    github: "https://github.com/smaranbh7/weather-app",
    live: "https://whatisweatherapp.netlify.app/",
  },
  {
    id: "blog-wall",
    name: "The Blog Wall",
    description: "Blog publishing app for writing and reading posts.",
    image: Blog,
    tags: ["Full-Stack"],
    github: "https://github.com/smaranbh7/The-Blog-Wall",
  },
  {
    id: "movie-app",
    name: "Movie Application",
    description: "Search and browse movie details pulled from a movie database API.",
    image: Movie,
    tags: ["JavaScript", "API"],
    github: "https://github.com/smaranbh7/Movie-app",
  },
  {
    id: "nasa-epic",
    name: "NASA EPIC Image",
    description: "Android app that pulls daily Earth images from NASA's EPIC API.",
    image: NasaEpicImage,
    tags: ["Kotlin", "Android", "API"],
    github: "https://github.com/smaranbh7/NASAEpicImage-KotlinApp",
  },
];
