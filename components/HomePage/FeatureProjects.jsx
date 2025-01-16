import React from 'react';
import ProjectCard from '../projectCard';
import { featureProjectsList } from '@/models';
import { projectList } from '@/models/projects';

const FeatureProjects = () => {

    const project = featureProjectsList();
  return (
    <div className="section border border-black" id='featureProjects'>
        <div className="flex flex-row gap-4 items-center my-10">
            <h2 className="text-5xl font-bold mb-2">Feature Projects</h2>
            <button className="border border-gray-500 text-gray-500 rounded-md px-3 py-1">
                More Projects
            </button>
        </div>

        <div >
            {project.length > 0 &&
                project.map((item, index) => (
                <div
                    key={index}
                    className='border border-black mb-4'
                >
                    <ProjectCard featureProject={item} />
                </div>
            ))}
        </div>




    </div>  
  );
};

export default FeatureProjects;
