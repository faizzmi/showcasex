'use client'
import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';

const Highlight = ({ highlight }) => {
  return (
    <div className="section max-h-fit text-white">
      <div className="flex flex-col md:flex-row w-full gap-4 py-20">
        <div className="md:w-1/2 w-full flex max-h-fit flex-col px-6 justify-center md:sticky md:top-24">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl font-bold"
          >
            {highlight.title}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-justify"
          >
            {highlight.desc}
          </motion.p>
        </div>

        <div className="md:w-1/2 w-full flex flex-col px-6">
          <div className="space-y-2">
            {highlight.pic.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="relative w-full overflow-hidden rounded-md mb-4"
              >
                <Image
                  src={image.src}
                  alt={`ui-${index}`}
                  width={image.width}
                  height={image.height}
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;