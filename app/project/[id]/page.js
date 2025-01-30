'use client';
import Description from '../../components/ProjectDetails/Description';
import Header from '../../components/ProjectDetails/Header';
import HeaderImage from '../../components/ProjectDetails/HeaderImage';
import Highlight from '../../components/ProjectDetails/Highlight';
import Section from '../../components/ProjectDetails/Section';
import { projectList } from '../../models/projects';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
  const pathName = usePathname();
  const id = pathName.split('/').pop();
  
    const [delay, setDelay] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDelay(true);
      }, 300);
  
      return () => clearTimeout(timer);
    }, []);

  const project = projectList.find((proj) => proj.projectId === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.div 
        key="details-content" 
        className="bg-zinc-900" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }}
      >
        <Header project={project} />
        <HeaderImage img={project.headerImage !== '' ? project.headerImage : "/images/default.png"} />
        <div>
          <Description project={project} />
          <Section content={project.projectFeatures} />
          <Section content={project.reflection} />
        </div>
        {project.highlight.title !== '' && (<Highlight highlight={project.highlight}/>)}
      </motion.div>
      {( delay) && (
        <motion.div
          key="motion-slide-out"
          className="slide-out m-auto flex items-center justify-center"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
      {(!delay) && (
        <motion.div
          key="motion-slide-in"
          className="slide-in m-auto flex items-center justify-center"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      )}
    </AnimatePresence>
  );
};

export default ProjectDetails;
