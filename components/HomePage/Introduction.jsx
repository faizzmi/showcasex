'use client';
import { introductory } from '@/models';
import Link from 'next/link';
import React, { useState } from 'react';
import Circulation from '../Circulation';
import { motion } from 'framer-motion';

const Introduction = () => {
  const [hovered, setHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="section h-screen flex flex-col justify-end relative bg-[#E0E1DD]" id="top">
      <div className="w-screen flex justify-center items-center">
        <Circulation />
      </div>
      <div className="container flex flex-col md:flex-row justify-between items-center relative bottom-10 left-0 px-6">
        <div className="mb-6 md:mb-0 md:w-2/3">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl font-bold mb-4 leading-snug"
          >
            {introductory.header.split('/').map((sentence, index) => (
              <span key={index}>
                {sentence}
                {index !== introductory.header.split('/').length - 1 && <br />}
              </span>
            ))}
          </motion.h2>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600"
          >
            {introductory.subheader}
            <Link href="/about">
              <span
                className="text-gray-800 ml-2 cursor-pointer hover:underline relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
              >
                Read More
              </span>
            </Link>
          </motion.p>
        </div>

        <div className="hidden md:block md:w-1/3 text-right">
          <ul className="list-none p-0 leading-tight">
            {introductory.servicesOffer.map((service, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                key={index}
                className="text-md text-gray-800"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {hovered && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: cursorPosition.y - 100,
            left: cursorPosition.x + 20,
            transform: 'translate(-50%, -50%)',
            zIndex: 50,
          }}
        >
          <img
            src="/images/hover.jpg"
            alt="Hover Preview"
            className="w-40 h-60 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default Introduction;
