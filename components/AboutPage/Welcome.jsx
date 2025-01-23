'use client'
import { welcome } from '@/models/about';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"

const Welcome = () => {
  return (
    <section className="section max-h-[700px] flex flex-col md:justify-end relative bg-[#E0E1DD]" id="top">
      <motion.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='absolute right-0 top-0'>
        <Image
          src="/images/profilePicture.jpg"
          alt="Profile Image"
          width={500} 
          height={700}
          className='object-cover w-full h-screen'
        />
      </motion.div>

      <div className="container flex flex-col md:flex-row justify-between items-center relative md:top-0 top-20 md:bottom-10 left-0 px-6">
        <div className="mb-6 md:mb-0 md:w-2/3">
          <motion.h2
          initial={{ y: -20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl font-bold mb-4 leading-snug">
            {welcome.split('.').map((sentence, index) => (
              <span key={index}>
                {sentence}{index !== welcome.split('.').length - 1 && <br />} 
              </span>
            ))}
          </motion.h2>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
