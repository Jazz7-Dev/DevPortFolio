import Layout from '../components/layout/Layout';

export default function Services() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Services</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl text-center">
          I offer a range of professional services to help you build and scale your web applications with modern technologies and best practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Web Development</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Building responsive, performant, and scalable web applications using React, Node.js, and Tailwind CSS.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">UI/UX Design</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Crafting intuitive and engaging user interfaces with a focus on usability and aesthetics.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Consulting & Support</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Providing expert advice and ongoing support to help you optimize your development workflow and technology stack.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
