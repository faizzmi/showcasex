'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const HeaderImage = ({ img }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100, bounce: 0 }}
      className="relative w-full h-64 sm:h-80 md:h-screen mx-auto overflow-hidden"
    >
      <Image
        src={img}
        alt="Project image"
        fill={true} 
        className="object-contain " 
      />
    </motion.div>
  )
}

export default HeaderImage
