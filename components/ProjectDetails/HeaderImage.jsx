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
      className="relative w-full h-screen overflow-hidden"
    >
      <Image
        src={img}
        alt="Project image"
        fill
        sizes="100vw"
        className="object-cover" 
      />
    </motion.div>
  )
}

export default HeaderImage