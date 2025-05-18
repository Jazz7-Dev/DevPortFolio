import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';

const techLogos = [
  {
    name: 'React.js',
    src: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    alt: 'React.js Logo',
    color: 'from-cyan-400 to-blue-600',
    bg: 'bg-blue-500/10'
  },
  {
    name: 'Vite',
    src: 'https://vitejs.dev/logo-with-shadow.png',
    alt: 'Vite Logo',
    color: 'from-purple-400 via-pink-500 to-amber-500',
    bg: 'bg-purple-500/10'
  },
  {
    name: 'Tailwind CSS',
    src: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
    alt: 'Tailwind CSS Logo',
    color: 'from-emerald-400 to-cyan-600',
    bg: 'bg-cyan-500/10'
  },
  {
    name: 'CSS3',
    src: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    alt: 'CSS3 Logo',
    color: 'from-blue-400 to-indigo-600',
    bg: 'bg-blue-500/10'
  },
  {
    name: 'Node.js',
    src: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    alt: 'Node.js Logo',
    color: 'from-green-400 to-emerald-600',
    bg: 'bg-green-500/10'
  },
  {
    name: 'Express.js',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSSHtlRaJnD8tG7CKfAjJShIgH4KID7xXFm7i2GrC7HBFo-GSssPcQl0MUoQvLk8PsfU&usqp=CAU',
    alt: 'Express.js Logo',
    color: 'from-gray-300 to-gray-600',
    bg: 'bg-gray-500/10'
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    alt: 'MongoDB Logo',
    color: 'from-green-400 to-emerald-600',
    bg: 'bg-green-500/10'
  },
  {
    name: 'C++',
    src: 'https://cdn.worldvectorlogo.com/logos/c.svg',
    alt: 'C++ Logo',
    color: 'from-blue-400 to-indigo-600',
    bg: 'bg-blue-500/10'
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
    alt: 'JavaScript Logo',
    color: 'from-yellow-300 to-amber-500',
    bg: 'bg-amber-500/10'
  },
  {
    name: 'Git',
    src: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
    alt: 'Git Logo',
    color: 'from-orange-400 to-red-600',
    bg: 'bg-orange-500/10'
  },
  {
    name: 'GitHub',
    src: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    alt: 'GitHub Logo',
    color: 'from-gray-600 to-gray-900',
    bg: 'bg-gray-500/10'
  },
  {
    name: 'Postman',
    src: 'https://cdn.worldvectorlogo.com/logos/postman.svg',
    alt: 'Postman Logo',
    color: 'from-orange-400 to-red-600',
    bg: 'bg-orange-500/10'
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const logoHover = {
  hover: {
    y: -8,
    scale: 1.05,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

export default function About() {
  return (
    <Layout>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-12 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-center text-gray-900 dark:text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Skills & Technologies
            </span>
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 justify-center"
          >
            {techLogos.map(({ name, src, alt, color, bg }) => (
              <motion.div 
                key={name}
                variants={fadeIn}
                whileHover="hover"
                className="flex flex-col items-center"
              >
                <motion.div
                  variants={logoHover}
                  className={`w-24 h-24 rounded-3xl p-1 flex items-center justify-center bg-gradient-to-br ${color} shadow-lg hover:shadow-xl transition-all duration-300 ${bg} backdrop-blur-sm`}
                >
                  <div className="w-full h-full bg-white/90 dark:bg-gray-900/90 rounded-xl flex items-center justify-center p-4 shadow-inner">
                    <img 
                      src={src} 
                      alt={alt} 
                      className="w-full h-full object-contain filter drop-shadow-md" 
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                <span className="mt-4 text-base sm:text-lg font-medium text-gray-800 dark:text-gray-200 tracking-tight">
                  {name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* College Section */}
      <section id="college" className="py-20 px-6 md:px-12 mt-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-center text-gray-900 dark:text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Education
            </span>
          </h2>
          
          <motion.div 
            variants={fadeIn}
            className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-gray-700/20 backdrop-blur-lg"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              BTech Computer Science Engineering
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                As a dedicated BTech CSE student, I've cultivated expertise in Full Stack Development and Data Structures & Algorithms, with hands-on experience architecting production-grade applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                My technical arsenal includes cutting-edge frameworks like React, Node.js, and MongoDB, with a relentless focus on crafting clean, maintainable code and building scalable, high-performance systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                I'm passionate about engineering elegant solutions that bridge technology and user experience, creating digital products that make a measurable impact.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}