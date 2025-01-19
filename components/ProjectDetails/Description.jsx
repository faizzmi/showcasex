import moment from 'moment';
import Image from 'next/image';
import React from 'react';

const Description = ({ project }) => {
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="section-container">
        <div className="md:w-1/3 w-full">
          <div className="section-details md:pl-10">
          <div className='mb-3'>
            <p className="desc-title">year developed:</p>
            <p className="desc-info">{moment(project.createdAt).format('YYYY')}</p>
          </div>
          <div className='mb-3'>
            <p className="desc-title">level:</p>
            <p className="desc-info">{project.projectLevel}</p>
          </div>
          <div className='mb-3'>
            <p className="desc-title">type:</p>
            <p className="desc-info">{project.projectType}</p>
          </div>
          {project.framework.length > 0 && (
            <div className='mb-3'>
              <p className="desc-title">framework:</p>
              <p className="desc-info">{project.framework.join(', ')}</p>
            </div>
          )}
          <div className='mb-3'>
            <p className="desc-title">tech stack:</p>
            <p className="desc-info">{project.projectStack.join(', ')}</p>
          </div>
          {project.projectURL !== "" && (
            <div className='mb-3'>
              <a className='btn-url' target='_blank' href={project.projectURL}>Open Website </a>{/* add logo arrow up right */}
            </div>
          )}
        </div>

        </div>

        <div className="md:w-2/3 w-full flex items-center">
          <p className="section-desc">{project.projectDesc}</p>
        </div>
      </div>

      <div className="relative w-full pt-[75%] mt-6">
        {/* <Image
          src="/images/default.png"
          alt="Project image"
          fill
          className="object-cover rounded-md"
        /> */}
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline={true}
          >
            <source src="/test_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
      </div>
      
    </div>
  );
};

export default Description;
