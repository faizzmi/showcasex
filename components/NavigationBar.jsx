'use client'
import React, { useState } from 'react';
import Contact from './Contact';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openContact, setOpenContact] = useState(false);

  return (
     <nav className="w-full fixed px-4 py-3 flex items-center justify-between z-50 bg-white bg-opacity-40">
      <a href="/" className="text-lg font-bold">
        Faiz Azmi.
      </a>
      <ul
        className={`${ isMenuOpen ? 'flex' : 'hidden' } 
          md:flex flex-col md:flex-row items-center sm:gap-4 gap-12 absolute md:static top-[60px] 
          left-4 right-4 md:left-0 md:right-0 bg-white bg-opacity-95 
          md:bg-transparent rounded-lg p-4 md:p-0 shadow-lg md:shadow-none`}
      >
        <li className="text-sm md:text-base font-medium">
          <a href="/project" className="hover:underline">
            Projects
          </a>
        </li>
        <li className="text-sm md:text-base font-medium">
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li className="text-sm md:text-base font-medium">
          <button onClick={() => {setOpenContact(true); setIsMenuOpen(!isMenuOpen)}}>
            <span className="hover:underline"></span>Contact
          </button>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {/* <button className="text-sm md:text-base font-medium">
          DarkMode
        </button> */}
        <button
          className="block md:hidden text-4xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '-' : '+'}
        </button>
      </div>
      {openContact && <Contact isOpen={openContact} onClose={() => setOpenContact(false)} />}
    </nav>
  );
};

export default NavigationBar;
