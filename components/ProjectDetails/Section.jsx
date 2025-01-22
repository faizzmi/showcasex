'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Section = ({ title, desc }) => {
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 mt-4 mb-8">
        <div className="md:w-1/3 w-full flex justify-start md:justify-center">
          <motion.h4
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
            {title}
          </motion.h4>
        </div>


        <div className="md:w-2/3 w-full">
          <motion.p
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 text-lg text-justify">
            {desc}
            </motion.p>
        </div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative w-full pt-[75%] mt-6">
        <Image
          src="/images/default.png"
          alt="Project image"
          fill
          className="object-cover rounded-md"
        />
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap gap-6 justify-start sm:w-full mt-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="relative w-full sm:w-full md:w-[calc(33%-12px)] aspect-[3/4] overflow-hidden"
          >
            <Image
              src="/images/default.png"
              alt={`Hobby Image ${index + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Section;
