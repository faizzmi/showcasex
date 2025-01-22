'use cient'
import { valuesList } from '@/models/about'
import React from 'react'
import { motion } from 'motion/react'

const Values = () => {
  return (
    <div className='section mt-20 px-4 md:px-10'>
      <div className='px-6'>
        <motion.h4
        initial={{ y: 20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-lg font-semibold text-gray-700'>
          Values
        </motion.h4>
        
        <motion.h2
        initial={{ y: 20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='text-4xl font-bold mb-4'>
          Things I Believe In
        </motion.h2>

        < hr className='border-t-2 border-gray-300 mb-6' />

        {valuesList.length > 0 && valuesList.map(({ name, description }, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0.3, filter: 'blur(0px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0.3, filter: 'blur(50px)' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mb-6'>
                <h4 className='text-3xl font-semibold text-gray-800 mb-2'>{description}</h4>
                <hr className='border-t-1 border-gray-300 mt-4' />
            </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Values