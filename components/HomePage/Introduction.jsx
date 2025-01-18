import { introductory } from '@/models';
import Link from 'next/link';
import React from 'react';

const Introduction = () => {
    return (
        <section className="section bg-gray-200 py-16 flex flex-col justify-end" id="intro">
            <div className="container flex flex-col md:flex-row justify-between items-center relative px-6">
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

                <div className="md:w-1/3 text-right">
                    <ul className="list-none p-0">
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
