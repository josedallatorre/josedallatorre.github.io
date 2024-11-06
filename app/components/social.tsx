import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'
//import ResumeButton from '../components/ResumeButton';

const SocialLinks: React.FC = () => {
  return (
    <div className="flex space-x-3 items-center">
      {/*<ResumeButton />*/}
      <Link href="mailto:jose.dallatorre@hotmail.com" target="_blank" className="text-gray-400 hover:text-white">
        <FaEnvelope size={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/josedallatorre/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaLinkedin size={24} />
      </Link>
      <Link href="https://github.com/josedallatorre/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <FaGithub size={24} />
      </Link>
    </div>
  );
};

export default SocialLinks;