import Image from 'next/image'
import React from 'react'

const HeaderImage = ({img}) => {
  return (
    <div className="section relative w-full h-64">
        <Image
          src={img}
          alt="Project image"
          fill
          className="object-cover"
        />
    </div>
  )
}

export default HeaderImage