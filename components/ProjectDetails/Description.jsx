'use client'
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Description = ({ project }) => {
  return (
    <div className="py-8 px-4 md:px-10">
      <div className="section-container">
        <motion.div 
        initial={{ y: 20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }} 
        className="md:w-1/3 w-full">
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
              <a className='btn-url' target='_blank' href={project.projectURL}>Open Website ↗</a>
            </div>
          )}
        </div>

        </motion.div>

        <motion.div
        initial={{ y: 20, opacity: 0 }} 
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }} 
        className="md:w-2/3 w-full flex ">
          <p className="section-desc">{project.projectDesc}</p>
        </motion.div>
      </div>

      <div
      className="relative w-full mt-6">
        {/* (<Image
          src="/images/default.png"
          alt="Project image"
          fill
          className="object-cover rounded-md"
        />) */}
        {project.videoURL && (
          <motion.div
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}  
          className="relative w-full h-0 pb-[56.25%]">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={project.videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </div>
      
    </div>
  );
};

export default Description;
