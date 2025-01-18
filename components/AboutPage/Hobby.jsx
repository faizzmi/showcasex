import Image from 'next/image'
import React from 'react'

const Hobby = () => {
  return (
    <div className="section px-4 md:px-10 py-10">
      <div className="flex flex-col sm:flex-col-reverse gap-6">
        <div className="mt-8 px-4 md:px-0 text-center md:text-left">
          <h4 className="text-3xl font-semibold text-gray-800">
            How I Relax When I Need Time Away From The Screen
          </h4>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-start sm:w-full md:w-full">
          <div className="relative w-full sm:w-[calc(33.3333%-12px)] md:w-[calc(33.3333%-12px)] aspect-[3/4] overflow-hidden">
            <Image
              src="/images/default.png"
              alt="Hobby Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full sm:w-[calc(33.3333%-12px)] md:w-[calc(33.3333%-12px)] aspect-[3/4] overflow-hidden">
            <Image
              src="/images/default.png"
              alt="Hobby Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative w-full sm:w-[calc(33.3333%-12px)] md:w-[calc(33.3333%-12px)] aspect-[3/4] overflow-hidden">
            <Image
              src="/images/default.png"
              alt="Hobby Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobby
