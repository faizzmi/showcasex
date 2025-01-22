'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Hobby = () => {
  return (
    <div className="section px-4 mt-20 md:px-10 py-10">
      <div className="flex flex-col sm:flex-col-reverse gap-6">
        <div className="mt-8 px-4 md:px-0 text-center md:text-left">
          <motion.h2
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} 
          className="text-4xl font-bold text-gray-800">
            How I Relax When I Need Time Away From The Screen
          </motion.h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-start sm:w-full md:w-full">
          {[...Array(3)].map((_, index) => (
            
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }} 
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + (index/5) }}
              className="relative w-full sm:w-[calc(33.3333%-12px)] md:w-[calc(33.3333%-12px)] aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/images/default.png"
                alt={`Hobby Image ${index + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hobby
