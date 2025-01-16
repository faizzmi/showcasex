// ProjectCard component
import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ featureProject }) => {
    const {projectName, projectHeader, projectStack, framework} = featureProject

  return (
    <div className="w-[900px] p-4 border border-blue">
      <Image 
        src="/images/default.png"
        alt="Project image" 
        width={850}
        height={700}
      />
      <div className="mt-4">
        <div className='flex flex-row space-between items-center gap-1'>
            <h4 className="text-xl font-semibold">
                {projectName} - {projectHeader}
            </h4>
        </div>
      </div>

      <div>
        <div>
          <ul className='flex flex-wrap gap-2'>
            {framework.length > 0 && framework.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            {projectStack.length > 0 && projectStack.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
