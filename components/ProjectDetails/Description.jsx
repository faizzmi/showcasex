import moment from 'moment';
import React from 'react';

const Description = ({ project }) => {
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="section-container">
        <div className="md:w-1/3 w-full">
          <div className="section-details">
            <p>
              <strong>year develop: </strong> {moment(project.createdAt).format('YYYY')}
            </p>
            <p>
              <strong>level: </strong> {project.projectLevel}
            </p>
            <p>
              <strong>type: </strong> {project.projectType}
            </p>
            {project.framework.length > 0 && (<p>
              <strong>framework: </strong> {project.framework.join(', ')}
            </p>)}
            <p>
              <strong>tech stack: </strong> {project.projectStack.join(', ')}
            </p>
          </div>
        </div>

        <div className="md:w-2/3 w-full">
          <p className="section-desc">{project.projectDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
