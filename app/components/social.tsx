// SocialLinks.tsx
import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';
//import ResumeButton from '../components/ResumeButton';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-3 items-center">
      {/*<ResumeButton />*/}
      <a href="jose.dallatorre@hotmail.com" className="text-gray-400 hover:text-white">
        <FaEnvelope size={24} />
      </a>
      <a href="https://www.linkedin.com/in/josedallatorre/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com/josedallatorre/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaGithub size={24} />
      </a>
    </div>
  );
};

export default SocialLinks;