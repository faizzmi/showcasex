import React from 'react';
import ProjectCard from '../projectCard';
import { featureProjectsList } from '@/models';
import Link from 'next/link';

const FeatureProjects = () => {
    const projects = featureProjectsList();

    return (
        <section className="section py-10 mt-20" id="featureProjects">
            <div className="flex flex-col md:flex-row gap-2 mb-10 px-6">
                <h2 className="text-4xl font-bold">feature projects</h2>
                <a
                    className="text-gary-600 hover:text-gray-800 transition-colors flex items-end"
                    href="/project"
                >
                    <span className="text-sm align-bottom">more projects +</span>
                </a>
                
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
