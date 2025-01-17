import { introductory } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Introduction = () => {
  return (
    <div className="section justify-end relative bg-[#d9d9d9]" id='intro'>
        {/* <div className='absolute inset-0 flex justify-center items-center z-0'>
            <Image src="/images/logoLight.jpg" alt='logo' width={900} height={900} />
        </div> */}

        <div className="flex flex-col md:flex-row justify-between z-10 relative m-10">
            <div className="mb-6 md:mb-0 md:w-2/3">
                <h2 className="text-[52px] font-bold leading-none mb-2">
                    {introductory.header.split('/').map((sentence, index) => (
                        <span key={index}>
                            {sentence}{index !== introductory.header.split('/').length - 1 && <br />} 
                        </span>
                    ))}
                </h2>
                <p className="text-[20px] text-gray-600">
                    {introductory.subheader}
                    <Link href="/about">
                        <span className="text-gray-800 ml-2 cursor-pointer">
                            Read More
                        </span>
                    </Link>
                </p>
            </div>

            <div className="md:w-1/3">
                <ul className="list-none p-0 text-right">
                    {introductory.servicesOffer.map((service, index) => (
                        <li key={index} className="text-md text-gray-800">{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Introduction;
