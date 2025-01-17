'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const { projectName, projectHeader, projectStack, framework } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/project/${project.projectId}`}>
      <div
        className="border border-black transition-all duration-300 hover:bg-gray-200 cursor-pointer w-[630px] mx-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
          <Image
            src="/images/default.png"
            alt="Project image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="py-4">
          <div className="mb-2">
            <h4 className="text-sm md:text-md font-semibold text-gray-900">
              {projectName} - {projectHeader}
            </h4>
          </div>

          <div className="mt-2">
            <ul className="flex flex-wrap gap-2">
              {framework.length > 0 &&
                framework.map((item, index) => (
                  <li
                    className="bg-slate-600 text-white text-sm sm:text-md px-3 py-2 rounded-md w-auto"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              {projectStack.length > 0 &&
                projectStack.map((item, index) => (
                  <li
                    className="bg-slate-300 text-gray-800 text-sm sm:text-md px-3 py-2 rounded-md w-auto"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;