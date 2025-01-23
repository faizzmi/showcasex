'use client'
import ProjectCard from '@/components/projectCard'
import SpalashScreen from '@/components/SpalashScreen';
import { desc, projectList } from '@/models/projects'
import React from 'react'
import { motion } from "motion/react"

const ProjectPage = () => {
  const sortProject = projectList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="section bg-zinc-900" id="top">
      <div className="flex flex-col md:flex-row justify-between items-center pt-[23vh] my-10">
        <motion.h2
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl font-bold text-white mb-4 md:mb-0"
        >
          my projects [{sortProject.length}]
        </motion.h2>

        <motion.p
          initial={{ x: 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-zinc-300 w-full md:w-1/3 text-center md:text-justify"
        >
          {desc}
        </motion.p>
      </div>

      <hr className="border-t-2 border-zinc-800 my-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {sortProject.length > 0 ? (
          sortProject.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center"
            >
              <ProjectCard project={item} />
            </motion.div>
          ))
        ) : (
          <p className="text-lg text-gray-500">No projects available at the moment.</p>
        )}
      </div>

      <div className='pb-20'></div>
    </div>
  )
}

export default ProjectPage

