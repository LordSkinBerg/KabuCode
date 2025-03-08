import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {image && <img src={image} alt={title} className="project-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </motion.div>
  );
};

export default ProjectCard;
