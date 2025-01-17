import React from 'react';

const Description = ({ project }) => {
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="m-5 flex flex-col md:flex-row w-full gap-6">
        <div className="md:w-1/3 w-full p-6">
          <p className="text-gray-600 mb-2"><strong>Level:</strong> {project.projectLevel}</p>
          <p className="text-gray-600 mb-2"><strong>Type:</strong> {project.projectType}</p>
          <p className="text-gray-600 mb-2"><strong>Framework:</strong> {project.framework.join(', ')}</p>
          <p className="text-gray-600 mb-2"><strong>Tech Stack:</strong> {project.projectStack.join(', ')}</p>
        </div>

        <div className="md:w-2/3 w-full p-6">
          <p className="text-gray-700">{project.projectDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
