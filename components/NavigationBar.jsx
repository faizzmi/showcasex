import React from 'react';

const NavigationBar = () => {
  return (
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50
    bg-white bg-opacity-40 rounded-md '>
        <a href="/" className="logo">Faiz Azmi.</a>
        <ul className='hidden md:flex items-center gap-10 lg:gap-12 px-12 py-3 bg-opacity-50 rounded-full'>
            <li><a href="/project">Projects</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button>
                DarkMode
            </button>
        </div>
    </nav>
  );
};

export default NavigationBar;
