import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full h-fit p-4 md:p-6 bg-primary">
      <div className="w-max py-8 flex flex-col items-center gap-6 mx-auto text-gray-800 text-md">
        <p className='font-semibold text-gray-600 text-sm'>Looking to bring someone on board?</p>
        <h2 className='font-bold text-slate-800 text-center text-3xl mb-4 md:text-[70px]'>Let's Work Together.</h2>
        <Image
            src="/images/logo.png"
            alt="Profile Image"
            width={250} 
            height={250}
            className='object-auto'
        />
      </div>

      <div className='bg-white bg-opacity-60 rounded-md flex flex-col items-start md:justify-start justify-center w-fit h-[100px] p-4'>
        <p className="text-gray-800 text-sm mb-2">Contact me via:</p>
        <ul className="flex items-center gap-6">
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/faizazmi7/"
            >
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:faizzmi74@gmail.com"
            >
              Email ↗
            </a>
          </li>
          <li>
            <a
              className="text-gray-800 hover:text-blue-500 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/faizzmi"
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>

      <hr className="border-t-2 border-gray-300 mt-6 mb-2" />
      <div className="text-center sm:flex items-center justify-between ">
        <p className="text-sm text-gray-600">© 2025 Faiz Azmi. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
