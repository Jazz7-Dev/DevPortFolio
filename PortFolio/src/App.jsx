import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValue } from 'framer-motion';
import { FiChevronRight, FiMenu } from 'react-icons/fi';
import BackgroundAnimation from './components/BackgroundAnimation';
import MeteorShower from './components/MeteorAnimation';
import { Sidebar } from './components/layout/Sidebar';

const defaultTiltOptions = {
  reverse: true,
  max: 15,
  perspective: 1000,
  scale: 1.03,
  transitionSpeed: 1000
};

export default function DivinePortfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ container: ref });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [showScroll, setShowScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const openSidebar = () => setSidebarOpen(true);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreClick = () => {
    openSidebar();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={ref} className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen overflow-y-auto scroll-smooth transition-colors duration-500`}>
      {darkMode && <>
        <BackgroundAnimation />
        <MeteorShower />
      </>}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Dark Mode Toggle */}
      <div
        className="fixed top-4 right-4 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 shadow-lg cursor-pointer select-none"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleDarkMode(); }}
      >
        <span className="text-white text-3xl font-bold">DJ</span>
      </div>
      {/* Sidebar Toggle Button */}
      {!sidebarOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white md:hidden"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FiMenu size={24} />
        </button>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-6 py-20 gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
            Devansh Jaiswal
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">Full Stack Developer & Problem Solver</p>
          <motion.div whileHover={{ scale: 1.02 }} className="inline-block">
            <button
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-all shadow-xl hover:shadow-2xl"
              onClick={handleExploreClick}
            >
              <span>EXPLORE</span>
              <FiChevronRight className="animate-pulse" />
            </button>
          </motion.div>
        </div>
        <div
          className="w-80 h-80 md:w-96 md:h-96 relative group cursor-pointer select-none perspective-1000"
          onClick={toggleDarkMode}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleDarkMode(); }}
        >
          <img
            src="https://sahilmor-portfolio.vercel.app/_next/image?url=%2Fman.png&w=1080&q=75"
            alt="Devansh Jaiswal"
            className="w-full h-full rounded-3xl object-cover shadow-2xl transform transition-transform duration-700 ease-in-out hover:rotate-y-12 hover:scale-105"
            style={{ transformStyle: 'preserve-3d' }}
          />
        </div>
      </section>

      {/* Other sections like Skills, College, Projects, Footer remain unchanged */}

    </div>
  );
}
