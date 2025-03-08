import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

export default function Home() {
  return (
    <AnimatedPage>
      <div className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Discover my projects and skills through a blend of modern design and traditional Japanese aesthetics.
        </p>
      </div>
      <div className="container">
        <section>
          <h2>Featured Projects</h2>
          <p>Explore some of my recent work below.</p>
          {/* Future enhancement: embed a few ProjectCards here as featured items */}
        </section>
      </div>
    </AnimatedPage>
  );
}
