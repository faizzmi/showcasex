'use client'
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

    </div>
  );
};

export default projectDetails;
