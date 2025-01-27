'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

const ProjectCard = ({ project }) => {
  const { projectId, projectName, projectHeader, headerImage, projectStack, framework } = project;

  return (
    <Link href={`/project/${projectId}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative transition-all duration-300 hover:bg-zinc-800 bg-zinc-900 cursor-pointer w-[90%] sm:w-[630px] mx-auto"
      >
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src={headerImage ? headerImage : "/images/default.png"}
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
                    className="bg-darker text-zinc-900 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-md"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
              {projectStack.length > 0 &&
                projectStack.map((item, index) => (
                  <li
                    className="bg-primary text-zinc-900 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2 rounded-md"
                    key={index}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
