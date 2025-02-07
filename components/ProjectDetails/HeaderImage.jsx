'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const HeaderImage = ({ img }) => {
  return (
    <motion.div
      initial={{ scaleY: 0.9, opacity: 0 }}
      whileInView={{ scaleY: 1, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      className="relative w-full md:w-screen h-auto md:h-[80vh] lg:h-[90vh] px-0 mx-auto overflow-hidden"
    >
      <Image
        src={img}
        alt="Project image"
        width={0}
        height={0}
        className="object-cover object-center w-full h-auto md:h-full"
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />
    </motion.div>
  )
}

export default HeaderImage
