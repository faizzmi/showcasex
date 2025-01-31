'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const HeaderImage = ({ img }: { img: string }) => {
  if (!img) return null // Prevent rendering if no image is provided

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100, bounce: 0 }}
      className="relative w-[90%] md:w-[80%] lg:w-[70%] min-h-[50vh] md:h-screen mx-auto overflow-hidden"
    >
      <Image
        src={img}
        alt="Project image"
        fill
        sizes="100vw"
        className="object-contain"
        priority
      />
    </motion.div>
  )
}

export default HeaderImage
