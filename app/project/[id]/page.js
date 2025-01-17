'use client'
import Description from '@/components/ProjectDetails/Description';
import Section from '@/components/ProjectDetails/Section';
import { projectList } from '@/models/projects';
import { usePathname } from 'next/navigation';

const projectDetails = () => {
    
    const pathName = usePathname();
    const id = pathName.split('/').pop();

    const project = projectList.find((proj) => proj.projectId === id);

    if (!project) {
        return <p>Project not found.</p>;
    }

  return (
    <div className="section">
      <div className="flex flex-col pt-[23vh] my-10">
        <p>{project.projectName}</p>
        <h2 className="text-5xl font-bold text-gray-900 mb-4 md:mb-0">{project.projectHeader}</h2>
      </div>
      
      <hr className="border-t-2 border-gray-300 my-6" />

      {/* image */}
      <Description project={project} />
      {/* image */}
      
      <Section title="features" desc={project.projectFeatures}/>
      <Section title="reflections" desc={project.reflection}/>

    
    </div>
  );
};

export default projectDetails;
