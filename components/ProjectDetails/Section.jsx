'use client'
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Section = ({ content }) => {
  const { title, desc, headerImg, pics } = content;
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center md:items-center gap-6 mt-4 mb-8">
        <div className="md:w-1/3 w-full flex justify-start md:justify-center">
          <motion.h4
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center md:text-left">
            {title}
          </motion.h4>
        </div>

        <div className="md:w-2/3 w-full">
          <motion.p
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-300 text-lg text-justify">
            {desc}
          </motion.p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {pics.length>0 && pics.map((pic, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + (index/5) }}
            className="relative w-full aspect-[3/4] overflow-hidden"
          >
            <Image
              src={pic}
              alt={`image ${index + 1}`}
              fill="true"
              className="object-cover rounded-md"
              onContextMenu={(e) => e.preventDefault()}
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section;
