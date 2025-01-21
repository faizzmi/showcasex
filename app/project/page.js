'use client'
import ProjectCard from '@/components/projectCard'
import SpalashScreen from '@/components/SpalashScreen';
import { desc, projectList } from '@/models/projects'
import React, { useEffect, useState } from 'react'

const ProjectPage = () => {
  const sortProject = projectList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div className="section" id="top">
      <div className="flex flex-col md:flex-row justify-between items-center pt-[23vh] my-10">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 md:mb-0">my projects [{sortProject.length}.]</h2>
        <p className="text-lg text-gray-600 w-full md:w-1/3 text-center md:text-justify">{desc}</p>
      </div>

      <hr className="border-t-2 border-gray-300 my-6" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {sortProject.length > 0 ? (
          sortProject.map((item, index) => (
            <div key={index} className="flex justify-center">
              <ProjectCard project={item} />
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-500">No projects available at the moment.</p>
        )}
      </div>
    </div>

  )
}

export default ProjectPage
