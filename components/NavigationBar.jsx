'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const NavigationBar = ({openContact, setOpenContact}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`w-full fixed top-0 px-4 py-3 flex items-center justify-between z-50 bg-white ${ isMenuOpen ? '' : 'bg-opacity-20'} backdrop-blur-md`}>
      <motion.a 
        href="/" 
        whileHover={{ scale: 1.05 }}
        className="text-lg font-bold">
        Faiz Azmi.
      </motion.a>
      <div className="flex items-center gap-4">
        <div 
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-center gap-6 md:gap-8 absolute md:static top-[60px] left-4 right-4 md:left-auto md:right-auto bg-white md:bg-transparent rounded-lg shadow-md md:shadow-none p-4 md:p-0`}
        >
          <Link href="/project" className="text-sm font-medium rounded-md hover:bg-zinc-900 px-2 hover:text-zinc-300 transition-colors">
            projects
          </Link>
          <Link href="/about" className="text-sm font-medium rounded-md hover:bg-zinc-900 hover:text-zinc-300 px-2 transition-colors">
            about
          </Link>
          <button
            onClick={() => {
              setOpenContact(true);
              setIsMenuOpen(false);
            }}
            className="text-sm font-medium hover:text-zinc-300 rounded-md hover:bg-zinc-900 px-2 transition-colors"
          >
            contact
          </button>
          <a
            href="/resume.pdf" download 
            className="px-4 py-2 border border-zinc-900 rounded-md bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-900 hover:text-zinc-600 transition-colors text-sm font-medium"
          >
            my resume
          </a>
        </div>
        <button
          className="md:hidden text-xl font-bold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '-' : '+'}
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;