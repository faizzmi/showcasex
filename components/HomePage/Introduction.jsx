'use client';
import { introductory } from '../../models/index';
import Link from 'next/link';
import React, { useState } from 'react';
import Circulation from '../Circulation';
import { motion } from 'framer-motion';

const Introduction = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <section className="section h-screen flex flex-col justify-end relative bg-[#E0E1DD]" id="top">
      <div className="w-screen flex justify-center items-center">
        <Circulation />
      </div>
      <div className="container flex flex-col md:flex-row justify-between items-center relative bottom-10 left-0 px-6">
        <div className="mb-6 md:mb-0 md:w-2/3">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
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
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600"
          >
            {introductory.subheader}
            <Link href="/about">
              <span
                className="text-gray-800 ml-2 cursor-pointer hover:underline relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Read More
                
                {hovered && (
                  <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2">
                    <img
                      src="/images/hover.jpg"
                      alt="Hover Preview"
                      fill={true}
                      className="max-w-[150px] object-contain rounded-lg shadow-xl"
                    />
                  </span>
                )}
              </span>
            </Link>
          </motion.p>
        </div>

        <div className="hidden md:block md:w-1/3 text-right">
          <ul className="list-none p-0 leading-tight">
            {introductory.servicesOffer.map((service, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
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

    </section>
  );
};

export default Introduction;
