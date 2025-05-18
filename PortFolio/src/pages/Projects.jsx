import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import BackgroundAnimation from '../components/BackgroundAnimation';
import MeteorAnimation from '../components/MeteorAnimation';
import { Sidebar } from '../components/layout/Sidebar';
import Layout from '../components/layout/Layout';

const defaultTiltOptions = {
  reverse: true,
  max: 15,
  perspective: 1000,
  scale: 1.03,
  transitionSpeed: 1000
};

const projects = [
  {
    title: "Food Delivery App (FoodBites)",
    description: "A full-stack food delivery application with user authentication, menu browsing, cart functionality, and order tracking.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://client-iota-lyart.vercel.app/login",
    github: "https://github.com/Jazz7-Dev",
    color: "bg-gradient-to-tr from-orange-500 to-red-500",
    image: "./p1.png"
  },
  {
    title: "Movie Suggestion App (Movie)",
    description: "Discover and get recommendations for movies based on your preferences with ratings and trailers.",
    tech: ["React", "TMDB API", "Tailwind CSS"],
    link: "https://cine-mate-black.vercel.app/",
    github: "https://github.com/Jazz7-Dev",
    color: "bg-gradient-to-tr from-purple-500 to-pink-500",
    image: "./p2.png"
  },
  {
    title: "Crowdfunding Platform for Athletes (Fund2Play)",
    description: "A responsive web app supporting underprivileged athletes with secure payment integration and campaign management.",
    tech: ["React", "Vite", "Tailwind CSS"],
    link: "https://fund2player.vercel.app/",
    github: "https://github.com/Jazz7-Dev",
    color: "bg-gradient-to-tr from-blue-500 to-indigo-500",
    image: "./p3.png"
  }
];

export default function Projects() {
  return (
    <Layout>
      {/* Projects Section */}
      <section className="py-20 px-4 md:px-10 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800 dark:text-white">Featured Projects</h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Tilt key={index} options={defaultTiltOptions} className="w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`p-1 rounded-3xl ${project.color} shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 h-[600px] flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="h-48 sm:h-56 md:h-64 mb-4 md:mb-6 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="object-cover w-full h-full rounded-xl transform hover:scale-105 transition-transform duration-300 ease-in-out" />
                    ) : (
                      <span className="text-gray-400">Project Screenshot</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-extrabold mb-2 md:mb-4 text-gray-900 dark:text-white tracking-wide">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 md:mb-6 flex-grow leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 flex-wrap mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 dark:bg-gradient-to-r dark:from-pink-400 dark:to-purple-400 dark:text-gray-900 dark:hover:from-pink-500 dark:hover:to-purple-500 transition-all duration-300 ease-in-out">
                      <FiExternalLink /> Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 ease-in-out">
                      <FiGithub /> View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>
    </Layout>
  );
}
