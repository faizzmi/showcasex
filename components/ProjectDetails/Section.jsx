import React from 'react'

const Section = ({title, desc}) => {
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="m-5 flex flex-col md:flex-row w-full gap-6">
        <div className="md:w-1/3 w-full p-6 flex items-center justify-center">
            <h3 className="text-xl font-semibold text-gray-800 text-center">{title}</h3>
        </div>

        <div className="md:w-2/3 w-full p-6">
          <p className="text-gray-700">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Section