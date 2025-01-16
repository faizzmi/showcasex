import { introductory } from '@/models';
import Image from 'next/image';
import React from 'react';

const Introduction = () => {
  return (
    <div className="section justify-end relative" id='intro'>
        {/* <div className='absolute inset-0 flex justify-center items-center z-[-1]'>
            <Image src="/images/logoLight.jpg" alt='logo' width={900} height={900} />
        </div> */}

        <div className='flex flex-col md:flex-row justify-between'>
            <div className="mb-6 md:mb-0 md:w-1/2">
                <h2 className="text-[62px] font-bold mb-2">{introductory.header}</h2>
                <p className="text-[26px] text-gray-600">
                    {introductory.subheader}
                    <a href="/" className="text-gray-800 ml-2">
                        Read More
                    </a>
                </p>
            </div>

            <div className="md:w-1/2">
                <ul className="list-none p-0 text-right sm:text-center">
                    {introductory.servicesOffer.map((service, index) => (
                        <li key={index} className="text-lg text-gray-800">{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Introduction;
