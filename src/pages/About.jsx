import React from 'react';
import SkillSection from '../components/SkillSection';

const skills = ['React', 'JavaScript', 'CSS', 'HTML', 'Node.js'];

export default function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <p>This page will include details about your journey, skills, and background.</p>
      <SkillSection skills={skills} />
    </div>
  );
}
