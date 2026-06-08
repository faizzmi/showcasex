'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Graph = ({ graph }) => {
  return (
    <div className="grid gap-16">
      {graph.title.map((title, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          className={`flex flex-col lg:flex-row items-center gap-8 ${
            idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={graph.pic[idx]}
              alt={title}
              width={800}
              height={500}
              className="rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              {title}
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed text-justify">
              {graph.desc[idx]}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Graph
