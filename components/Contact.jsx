'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ isOpen, onClose }) => {
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setShowResult(false);
        setResult('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [result]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.target);

    formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        event.target.reset();
      } else {
        setResult('An error occurred. Please try again.');
      }
    } catch (error) {
      setResult('Network error. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center md:justify-end items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-full max-w-sm h-auto max-h-min shadow-lg m-5 rounded-lg p-6 relative z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ✕
        </button>

        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-semibold text-gray-800 mb-4"
        >
          Contact Me
        </motion.h2>

        {result !== '' && (
          <div className="mb-4 text-sm text-center text-green-600 bg-green-100 border border-green-200 p-2 rounded">
            {result}
          </div>
        )}

        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={onSubmit}
        >
          <div className="mb-4">
            <motion.label
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </motion.label>
            <motion.input
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <motion.label
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </motion.label>
            <motion.input
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <motion.label
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </motion.label>
            <motion.textarea
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Your Message"
              required
            ></motion.textarea>
          </div>

          <div className="flex justify-end">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              type="submit"
              className="btn-primary"
            >
              Send
            </motion.button>
          </div>
        </motion.form>

        <hr className="mt-6 mb-2" />

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6">
          <p className="text-gray-600 text-sm mb-2">Or visit me on my social:</p>
          <div className="flex items-center gap-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/faizazmi7/"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/images/linkedin_light.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/faizzmi"
              className="hover:scale-110 transition-transform duration-300"
            >
              <Image
                src="/images/git_light.png"
                alt="GitHub"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
