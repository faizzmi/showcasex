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
      className="relative w-full md:w-[80%] lg:w-[70%] h-auto md:h-[70vh] lg:h-[80vh] mx-auto overflow-hidden"
    >
      <Image
        src={img}
        alt="Project image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
        className="object-cover"
      />
    </motion.div>
  )
}

export default HeaderImage
