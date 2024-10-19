import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header>
      <div className="mb-4 relative w-[150px] h-[150px] overflow-hidden rounded-full">
        <Image
          src="/profile-image.jpg" // Replace with the actual path to your image
          alt="Josè Dalla Torre"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Josè Dalla Torre</h1>
      <h2 className="text-xl text-gray-400 mb-4">Student | Software Engineer</h2>
      <h3 className="text-lg text-gray-400 mb-4">📍 Udine, Italy 🇮🇹</h3>
      <p className="text-gray-300 text-sm">Breve frase</p>
    </header>
  );
};

export default Header;