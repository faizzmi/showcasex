'use client'
import React from 'react';
import ProjectCard from '../projectCard';
import { featureProjectsList } from '@/models';
import { motion } from "motion/react"

const FeatureProjects = () => {
    const projects = featureProjectsList();

    return (
        <section className="section max-h-auto py-10 mt-20" id="featureProjects">
            <div className="flex flex-col md:flex-row gap-2 mb-10 px-6">
                <motion.h2
                initial={{ y: -20, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl font-bold">
                    feature projects
                </motion.h2>
                <motion.a
                    initial={{ y: -20, opacity: 0 }} 
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-gray-600 hover:text-gray-800 transition-colors flex items-end"
                    href="/project"
                >
                    <span className="text-sm align-bottom">
                        more projects +
                    </span>
                </motion.a>
                
            </div>

            <div className="project-list">
                {projects.length > 0 &&
                    projects.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }} 
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className={`mb-10 flex flex-col ${index === 1 ? 'items-end' : 'items-start'}`}
                        >
                            <ProjectCard project={item} />
                        </motion.div>
                    ))}
            </div>
        </section>
    );
};

export default FeatureProjects;
