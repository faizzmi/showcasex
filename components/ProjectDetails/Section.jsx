import Image from 'next/image';
import React from 'react';

const Section = ({ title, desc }) => {
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="md:w-1/3 w-full">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>

        <div className="md:w-2/3 w-full">
          <p className="text-gray-700 text-base md:text-lg text-justify">{desc}</p>
        </div>
      </div>

      <div className="relative w-full pt-[75%] mt-6">
        <Image
          src="/images/default.png"
          alt="Project image"
          fill
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-start sm:w-full mt-8">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[calc(33.3333%-12px)] md:w-[calc(33%-12px)] aspect-[3/4] overflow-hidden"
          >
            <Image
              src="/images/default.png"
              alt={`Hobby Image ${index + 1}`}
              fill
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
