'use client'
import Image from 'next/image';
import React from 'react'
import { motion } from 'motion/react';

const Highlight = ({highlight}) => {

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 pt-8 pb-20 px-4">
        <motion.div
          id='text'
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 px-4 md:px-10"
        >
          <h2 className="text-2xl font-bold text-white">highlights</h2>
          <p className="text-zinc-300 text-base md:text-lg text-justify">
            A visual journey behind this project.
          </p>
        </motion.div>
        {highlight.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="relative w-full h-40 sm:h-48 lg:h-64 overflow-hidden rounded-md"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Highlight;
