import { story } from '@/models/about'
import React from 'react'

const Story = () => {
  return (
    <div className="section mt-20 flex flex-col md:flex-row gap-6 px-4 md:px-10">
      {/* Story Section */}
    <div className='m-5'>
        <div className="bg-white md:w-1/2 w-full p-6">
            <p className="text-gray-800 text-[40px] leading-relaxed whitespace-pre-line">
            {story}
            </p>
        </div>

        {/* Additional Text Section */}
        <div className="bg-white md:w-1/2 w-full p-6 flex items-center justify-center">
            <p className="text-gray-600 text-lg font-semibold">textx</p>
        </div>
    </div>
    </div>
  )
}

export default Story
