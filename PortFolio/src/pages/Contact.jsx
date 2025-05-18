import Layout from '../components/layout/Layout';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const form = e.target;
      const data = new FormData(form);
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_FORM_ID.replace('https://formspree.io/f/', '')}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data,
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message');
    }
  };

  return (
    <Layout>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Contact Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl text-center">
          Feel free to reach out via email or social media. Use the form below to send me a message.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
              />
            </div>
            {error && <p className="text-red-600 mb-6">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        ) : (
          <p className="text-green-600 dark:text-green-400 text-lg font-semibold">Thank you for your message! I will get back to you soon.</p>
        )}
      </section>
    </Layout>
  );
}
