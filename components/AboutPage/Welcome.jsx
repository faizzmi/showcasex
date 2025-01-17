import { welcome } from '@/models/about';
import Image from 'next/image';
import React from 'react';

const Welcome = () => {
  return (
    <div className="section justify-start relative bg-[#d9d9d9]" id='intro'>
      <div className='absolute right-0 top-0'> 
        {/* <Image src="/images/profilePicture.jpg" alt='logo' height={100} width={633} objectFit='cover' />  */}
      </div>

      <div className="absolute bottom-10 left-10 m-10"> 
        <h2 className="text-[52px] font-bold leading-none mb-2">
          {welcome.split('.').map((sentence, index) => (
            <span key={index}>
              {sentence}{index !== welcome.split('.').length - 1 && <br />} 
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default Welcome;