'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const { projectName, projectHeader, projectStack, framework } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="border border-black max-w-4xl w-full bg-white transition-all duration-300 hover:bg-gray-200 cursor-pointer h-auto relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
        <Image 
          src="/images/default.png"
          alt="Project image" 
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="py-4 px-6">
        <div className="mb-2">
          <h4 className="text-lg md:text-xl font-semibold text-gray-900">{projectName} - {projectHeader}</h4>
        </div>

        <div className="mt-2">
          <ul className="flex flex-wrap gap-2">
            {framework.length > 0 && framework.map((item, index) => (
              <li className="bg-slate-600 text-white text-sm sm:text-md px-3 py-2 rounded-md w-auto" key={index}>
                {item}
              </li>
            ))}
            {projectStack.length > 0 && projectStack.map((item, index) => (
              <li className="bg-slate-300 text-gray-800 text-sm sm:text-md px-3 py-2 rounded-md w-auto" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
