'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const ProjectCard = ({ project }) => {
  const { projectId, projectName, projectHeader, projectStack, framework } = project;

  return (
    <Link href={`/project/${projectId}`}>
      <div
        className="relative transition-all duration-300 hover:bg-zinc-800 bg-zinc-900 cursor-pointer w-[90%] sm:w-[630px] mx-auto"
      >
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/images/default.png"
            alt="Project image"
            fill
            className="object-cover"
          />
        </div>

        <div className="py-4 px-2">
          <div className="mb-2">
            <h4 className="text-sm sm:text-md font-semibold text-zinc-100">
              {projectName} - {projectHeader}
            </h4>
          </div>

          <div className="mt-2">
            <ul className="flex flex-wrap gap-2">
              {framework.length > 0 &&
                framework.map((item, index) => (
                  <li
                    className="bg-zinc-700 text-zinc-100 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-md"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              {projectStack.length > 0 &&
                projectStack.map((item, index) => (
                  <li
                    className="bg-zinc-800 text-zinc-200 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-md"
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
