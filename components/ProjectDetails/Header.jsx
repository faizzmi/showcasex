'use client'
import React from 'react'
import { motion } from 'motion/react'

const Header = ({project}) => {
  return (
    <div className="w-full h-max p-4 md:p-6" id="top">
        <div className="flex flex-col pt-[23vh] my-10">
          <motion.p 
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }} 
          className='text-lg font-semibold text-zinc-600'>
            {project.projectName}
          </motion.p>

          <motion.h2
          initial={{ y: 20, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }} 
          className="text-4xl font-bold text-white mb-4 md:w-[60%] md:mb-0">
            {project.projectHeader}
          </motion.h2>
        </div>

        <hr className="border-t-2 border-zinc-600 my-6" />
    </div>
  )
}

export default Header