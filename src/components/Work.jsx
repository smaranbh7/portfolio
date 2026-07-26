import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { featuredProjects, archiveProjects } from '../data/projects';

const FeaturedCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: (index % 2) * 0.08 }}
    className="group bg-surface border border-border rounded-lg overflow-hidden hover:border-signal/60 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="h-44 overflow-hidden bg-ink-soft">
      <img
        src={project.image}
        alt={`${project.name} preview`}
        loading="lazy"
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5">
      <h3 className="font-display font-semibold text-ivory text-lg">{project.name}</h3>
      <p className="text-ivory-muted text-sm mt-2 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-chip">{tag}</span>
        ))}
      </div>
      <div className="flex items-center gap-4 mt-5 font-mono text-xs">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ivory-muted hover:text-signal transition-colors duration-200"
          >
            <FaGithub /> {project.githubLabel || 'Source'}
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-ivory-muted hover:text-signal transition-colors duration-200"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const ArchiveRow = ({ project }) => (
  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 border-b border-border">
    <div>
      <h4 className="font-display font-medium text-ivory">{project.name}</h4>
      <p className="text-ivory-muted text-sm mt-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-chip">{tag}</span>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-4 font-mono text-xs shrink-0">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ivory-muted hover:text-signal transition-colors duration-200"
        >
          <FaGithub /> {project.githubLabel || 'Source'}
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ivory-muted hover:text-signal transition-colors duration-200"
        >
          <FaExternalLinkAlt /> Live
        </a>
      )}
    </div>
  </div>
);

const Work = () => {
  return (
    <div id="work" name="work" className="w-full py-24 bg-ink">
      <div className="max-w-[900px] mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="eyebrow mb-3">Work</p>
          <h2 className="section-heading">Things I've shipped</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <h3 className="font-mono text-xs uppercase tracking-wide text-ivory-muted mb-2">
          More projects
        </h3>
        <div>
          {archiveProjects.map((project) => (
            <ArchiveRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
