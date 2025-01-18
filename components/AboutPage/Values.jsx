import { valuesList } from '@/models/about'
import React from 'react'

const Values = () => {
  return (
    <div className='section px-4 md:px-10'>
        <div className='m-5 p-6'>
        <p className='text-gray-700 text-sm'>Values</p>
        <h2 className='text-4xl my-4'>Things I Believe In</h2>
        <hr className='border-t-2 border-gray-300 mb-6' />

        {valuesList.length > 0 && valuesList.map(({ name, description }, index) => (
            <div key={index} className='mb-6'>
                <h4 className='text-3xl font-semibold text-gray-800 mb-2'>{description}</h4>
                <hr className='border-t-1 border-gray-300 mt-4' />
            </div>
        ))}
        </div>
    </div>
  )
}

export default Values