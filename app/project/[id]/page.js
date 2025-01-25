'use client';
import Description from '@/components/ProjectDetails/Description';
import Header from '@/components/ProjectDetails/Header';
import HeaderImage from '@/components/ProjectDetails/HeaderImage';
import Highlight from '@/components/ProjectDetails/Highlight';
import Section from '@/components/ProjectDetails/Section';
import { projectList } from '@/models/projects';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const pathName = usePathname();
  const id = pathName.split('/').pop();

  const project = projectList.find((proj) => proj.projectId === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <motion.div
      className="bg-zinc-900"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Header project={project} />
      <HeaderImage img={"/images/default.png"} />
      <div>
        <Description project={project} />
        <Section title="features" desc={project.projectFeatures} />
        <Section title="reflections" desc={project.reflection} />
      </div>
      <Highlight />
    </motion.div>
  );
};

export default ProjectDetails;
