import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import BackgroundAnimation from '../BackgroundAnimation';
import MeteorAnimation from '../MeteorAnimation';
import { Sidebar } from './Sidebar';

export default function Layout({ children }) {
  const ref = useRef();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [darkMode, setDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleSidebar = (value) => {
    if (typeof value === 'boolean') {
      setSidebarOpen(value);
    } else {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const [hoverToggle, setHoverToggle] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const resetHoverToggle = () => setHoverToggle(false);
    window.addEventListener('resetHoverToggle', resetHoverToggle);
    return () => {
      window.removeEventListener('resetHoverToggle', resetHoverToggle);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setSidebarOpen(true);
    }
  }, []);

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
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setSidebarVisible(false);
      } else {
        setSidebarVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={ref} className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen overflow-y-auto scroll-smooth transition-colors duration-500`}>
      {darkMode && <>
        <BackgroundAnimation />
        <MeteorAnimation />
      </>}
      <Sidebar isOpen={sidebarOpen || hoverToggle} toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
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
      {!sidebarOpen && !hoverToggle && (
      <button
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white"
        onClick={toggleSidebar}
        {...(isMobile ? {} : {
          onMouseEnter: () => {
            setHoverToggle(true);
            setSidebarOpen(true);
          },
          onMouseLeave: () => {
            setHoverToggle(false);
            setSidebarOpen(false);
          }
        })}
        aria-label="Toggle sidebar"
      >
        <FiMenu size={24} />
      </button>
      )}
      {children}
    </div>
  );
}
