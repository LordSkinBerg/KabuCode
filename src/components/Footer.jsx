import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
