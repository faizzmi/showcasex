'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/models/skill';

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-lightest" id="skills">
      <div className="text-center max-w-5xl mx-auto">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl font-bold text-zinc-900 mb-12">Skills</motion.h2>
        
        <div
            className="flex flex-wrap justify-center gap-8"
        >
            {skillsData.map((skill, index) => (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index/20, duration: 0.8 }}
                key={skill.name}
                className="text-center cursor-pointer"
                whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
                    transition: { type: 'spring', stiffness: 150, damping: 20 },
                }}
            >
              <div className="bg-primary p-6 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out">
                <img src={skill.logo} alt={skill.name} className="w-20 h-20 mb-4 mx-auto" />
                <p className="text-xl font-semibold text-zinc-900">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
