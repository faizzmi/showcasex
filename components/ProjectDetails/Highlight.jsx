import Image from 'next/image';
import React from 'react'

const Highlight = () => {
    
  const images = [
    { src: '/images/default.png', alt: 'Image 1', className: 'w-full sm:w-1/2 lg:w-1/3 h-64' },
    { src: '/images/default.png', alt: 'Image 2', className: 'w-full sm:w-1/3 lg:w-1/4 h-80' },
    { src: '/images/default.png', alt: 'Image 3', className: 'w-full sm:w-2/3 lg:w-1/2 h-48' },
    { src: '/images/default.png', alt: 'Image 4', className: 'w-full sm:w-1/2 lg:w-1/3 h-96' },
    { src: '/images/default.png', alt: 'Image 5', className: 'w-full sm:w-1/3 lg:w-1/4 h-60' },
    { src: '/images/default.png', alt: 'Image 6', className: 'w-full sm:w-2/3 lg:w-1/2 h-72' },
  ];

  return (
    <>
        <div className='py-8 px-4 md:px-10'>
            <h2 className='text-2xl font-bold text-gray-900'>Image Highlights</h2>
            <p className='text-gray-700 text-base md:text-lg text-justify'>Here’s a closer look at our project through a series of images that capture the creativity and dedication behind each detail.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-1 my-8">
            {images.map((image, index) => (
                <div key={index} className={`relative ${image.className} overflow-hidden rounded-md`}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                />
                </div>
            ))}
        </div>
    </>
  )
}

export default Highlight