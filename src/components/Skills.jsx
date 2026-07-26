import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const Skills = () => {
  return (
    <div name="skills" className="w-full py-24 bg-ink-soft">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="section-heading">Tools I reach for</h2>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wide text-ivory-muted mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tag-chip hover:border-signal hover:text-ivory transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
