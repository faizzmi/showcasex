import React from 'react';
import ProjectCard from '../projectCard';
import { featureProjectsList } from '@/models';

const FeatureProjects = () => {
    const projects = featureProjectsList();

    return (
        <section className="section py-10 mt-20" id="featureProjects">
            <div className="flex flex-row gap-4 items-center mb-10">
                <h2 className="text-xl font-bold">Feature Projects</h2>
                <button className="btn-secondary">More Projects</button>
            </div>

            <div className="project-list">
                {projects.length > 0 &&
                    projects.map((item, index) => (
                        <div
                            key={index}
                            className={`mb-10 flex flex-col ${index === 1 ? 'items-end' : 'items-start'}`}
                        >
                            <ProjectCard project={item} />
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default FeatureProjects;
