'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full h-fit p-4 md:p-6 bg-primary">
      <div className="w-max py-8 flex flex-col items-center gap-6 mx-auto text-gray-800 text-md">
        <p className="font-semibold text-gray-600 text-sm">Looking to bring someone on board?</p>
        <h2 className="font-bold text-slate-800 text-center text-3xl mb-4 md:text-[70px]">
          Let's Work Together.
        </h2>
        <Image
          src="/images/footer.jpeg"
          alt="Footer Image"
          width={650}
          height={250}
          layout="responsive"
          className="object-cover w-full md:w-[650px] h-auto"
        />
        <motion.h2
          className="text-lg md:text-2xl font-bold text-gray-700 mt-4 animate-bounce"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          THANK YOU FOR VISITING
        </motion.h2>
      </div>

      <div className='flex gap-4 mt-6 justify-center md:justify-between w-full md:w-[17%]'>
          <a
            className="text-sm text-gray-600 hover:text-darkest transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/faizzmi"
          >
            GitHub ↗
          </a>
          <a
            className="text-sm text-gray-600 hover:text-darkest transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/faizazmi7/"
          >
            LinkedIn ↗
          </a>
          <a
          className="text-sm text-gray-600 hover:text-darkest transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:faizzmi74@gmail.com"
        >
          Email ↗
          </a>
        </div>
      <hr className="border-t-2 border-gray-300 mb-2" />
      <div className="text-center sm:flex items-center justify-between">
        <p className="text-sm text-gray-600">© 2025 Faiz Azmi. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
