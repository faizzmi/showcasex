'use client';
import Description from '@/components/ProjectDetails/Description';
import Header from '@/components/ProjectDetails/Header';
import HeaderImage from '@/components/ProjectDetails/HeaderImage';
import Highlight from '@/components/ProjectDetails/Highlight';
import Section from '@/components/ProjectDetails/Section';
import { projectList } from '@/models/projects';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ProjectDetails = () => {
  const pathName = usePathname();
  const id = pathName.split('/').pop();

  const project = projectList.find((proj) => proj.projectId === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className='bg-zinc-900'>
      <Header project={project}/>
      <HeaderImage img={"/images/default.png"}/>
      <div>
        <Description project={project} />

        {/* check this below code */}
        <Section title="features" desc={project.projectFeatures} />
        <Section title="reflections" desc={project.reflection} />
      </div>
      <Highlight />
      {/*  */}
    </div>
  );
};

export default ProjectDetails;
