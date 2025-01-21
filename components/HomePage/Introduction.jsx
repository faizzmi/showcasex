'use client'
import { introductory } from '@/models';
import Link from 'next/link';
import React from 'react';
import Circulation from '../Circulation';
import { motion } from "motion/react"

const Introduction = () => {
    return (
        <section className="section h-screen py-16 flex flex-col justify-end relative" id="top">
            <div className='h-screen w-screen flex justify-center items-center'>
                <Circulation />
            </div>
            <div className="container flex flex-col md:flex-row justify-between items-center relative bottom-10 left-0 px-6">
                <div className="mb-6 md:mb-0 md:w-2/3">
                    <motion.h2 
                    initial={{ y: -20, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl font-bold mb-4 leading-snug">
                        {introductory.header.split('/').map((sentence, index) => (
                            <span key={index}>
                                {sentence}
                                {index !== introductory.header.split('/').length - 1 && <br />}
                            </span>
                        ))}
                    </motion.h2>
                    <motion.p
                    initial={{ y: -20, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-gray-600">
                        {introductory.subheader}
                        <Link href="/about">
                            <span className="text-gray-800 ml-2 cursor-pointer">Read More</span>
                        </Link>
                    </motion.p>
                </div>

                <div className="hidden md:block md:w-1/3 text-right">
                    <ul className="list-none p-0 leading-tight">
                        {introductory.servicesOffer.map((service, index) => (
                            <motion.li 
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            key={index} className="text-md text-gray-800">{service}</motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
