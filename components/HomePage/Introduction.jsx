import { introductory } from '@/models';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Introduction = () => {
    return (
        <section className="section max-h-[700px] py-16 flex flex-col justify-end relative" id="top">
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Image
                    src="/images/logoLight.jpg"
                    alt="Profile Image"
                    width={500} 
                    height={700}
                    className='object-auto w-full md:h-screen'
                />
            </div>
            <div className="container flex flex-col md:flex-row justify-between items-center relative bottom-10 left-0 px-6">
                <div className="mb-6 md:mb-0 md:w-2/3">
                    <h2 className="text-4xl font-bold mb-4 leading-snug">
                        {introductory.header.split('/').map((sentence, index) => (
                            <span key={index}>
                                {sentence}
                                {index !== introductory.header.split('/').length - 1 && <br />}
                            </span>
                        ))}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {introductory.subheader}
                        <Link href="/about">
                            <span className="text-gray-800 ml-2 cursor-pointer">Read More</span>
                        </Link>
                    </p>
                </div>

                <div className="hidden md:block md:w-1/3 text-right">
                    <ul className="list-none p-0 leading-tight">
                        {introductory.servicesOffer.map((service, index) => (
                            <li key={index} className="text-md text-gray-800">{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
