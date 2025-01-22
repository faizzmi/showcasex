import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="section bg-gray-200">
      <div className="w-max py-8 flex flex-col items-center gap-6 mx-auto text-gray-800 text-md">
        <p className='font-semibold text-gray-600 text-sm'>Looking to bring someone on board?</p>
        <h2 className='font-bold text-slate-800 text-center text-3xl mb-4 md:text-[70px]'>Let's Work Together.</h2>
        <Image
            src="/images/logo.png"
            alt="Profile Image"
            width={300} 
            height={300}
            className='object-auto'
        />
      </div>


      <hr className="border-t-2 border-gray-300 mt-6 mb-2" />
      <div className="text-center sm:flex items-center justify-between ">
        <p className="text-sm text-gray-600">© 2025 Faiz Azmi. All rights reserved</p>
        <ul className="flex items-center gap-6 justify-center mt-4 sm:mt-0">
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/faizazmi7/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:faizzmi74@gmail.com"
            >
              Email
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/faizzmi"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
