import { welcome } from '@/models/about';
import Image from 'next/image';
import React from 'react';

const Welcome = () => {
  return (
    <section className="section max-h-[700px] py-16 flex flex-col md:justify-end relative" id="top">
      <div className='absolute right-0 top-0'>
        <Image
          src="/images/profilePicture.jpg"
          alt="Profile Image"
          width={500} 
          height={700}
          className='object-cover w-full h-screen'
        />
      </div>

      <div className="container flex flex-col md:flex-row justify-between items-center relative md:top-0 top-20 md:bottom-10 left-0 px-6">
        <div className="mb-6 md:mb-0 md:w-2/3">
          <h2 className="text-4xl font-bold mb-4 leading-snug">
            {welcome.split('.').map((sentence, index) => (
              <span key={index}>
                {sentence}{index !== welcome.split('.').length - 1 && <br />} 
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
