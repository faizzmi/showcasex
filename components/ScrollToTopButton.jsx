'use client'
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed flex flex-row bottom-8 right-4 p-4 z-20 bg-[#415A77] text-white items-center text-sm rounded-full shadow-lg hover:bg-gray-700 transition"
        >
          ↑ <span className='sm:block hidden'>&nbsp;&nbsp;To Top</span>
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
