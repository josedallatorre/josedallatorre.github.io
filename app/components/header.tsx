import Image from "next/legacy/image";

export default function Header(){
  return (
    <header>
      <div className="mb-4 relative w-[150px] h-[150px] overflow-hidden rounded-full">
        <Image
          src="/profile-image.jpg"
          alt="Josè Dalla Torre"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Josè Dalla Torre</h1>
      <h2 className="text-xl text-gray-400 mb-4">Student | Software Engineer</h2>
      <h3 className="text-lg text-gray-400 mb-4">📍 Udine, Italy 🇮🇹</h3>
      /*
      * <p className="text-gray-300 text-sm">Breve frase</p>
      */
    </header>
  );
};