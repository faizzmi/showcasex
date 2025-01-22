'use client'
import Image from 'next/image';
import React from 'react'
import { motion } from 'motion/react';

const Highlight = () => {
    
  const images = [
    { src: '/images/default.png', alt: 'Image 1', className: 'w-full sm:w-1/2 lg:w-1/3 h-64' },
    { src: '/images/default.png', alt: 'Image 2', className: 'w-full sm:w-1/3 lg:w-1/4 h-80' },
    { src: '/images/default.png', alt: 'Image 3', className: 'w-full sm:w-2/3 lg:w-1/2 h-48' },
    { src: '/images/default.png', alt: 'Image 4', className: 'w-full sm:w-1/2 lg:w-1/3 h-96' },
    { src: '/images/default.png', alt: 'Image 5', className: 'w-full sm:w-1/3 lg:w-1/4 h-60' },
    { src: '/images/default.png', alt: 'Image 6', className: 'w-full sm:w-2/3 lg:w-1/2 h-72' },
  ];

  return (
    <>
        <motion.div
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='py-8 px-4 md:px-10'>
            <h2 className='text-2xl font-bold text-white'>Image Highlights</h2>
            <p className='text-zinc-300 text-base md:text-lg text-justify'>Here’s a closer look at our project through a series of images that capture the creativity and dedication behind each detail.</p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap justify-center gap-1 pt-8 pb-20">
            {images.map((image, index) => (
                <div key={index} className={`relative ${image.className} overflow-hidden rounded-md`}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                />
                </div>
            ))}
        </motion.div>
    </>
  )
}

export default Highlight