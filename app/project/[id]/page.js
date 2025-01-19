'use client';
import Description from '@/components/ProjectDetails/Description';
import Header from '@/components/ProjectDetails/Header';
import HeaderImage from '@/components/ProjectDetails/HeaderImage';
import Highlight from '@/components/ProjectDetails/Highlight';
import Section from '@/components/ProjectDetails/Section';
import SpalashScreen from '@/components/SpalashScreen';
import { projectList } from '@/models/projects';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProjectDetails = () => {
  const pathName = usePathname();
  const id = pathName.split('/').pop();

  const project = projectList.find((proj) => proj.projectId === id);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    isLoading ? (<SpalashScreen />) :
    (<>
      <Header project={project}/>
      <HeaderImage img={"/images/default.png"}/>
      <div>
        <Description project={project} />
        <Section title="features" desc={project.projectFeatures} />
        <Section title="reflections" desc={project.reflection} />
      </div>
      <Highlight />
    </>)
  );
};

export default ProjectDetails;
