// components/RepoCard.tsx
import React from 'react';
import {
  DiJavascript1, DiPython, DiJava, DiReact, DiHtml5, DiCss3, DiGo, DiRust,
  DiSwift, DiRuby, DiPhp, DiKotlin, DiCsharp, DiCplusplus, DiDocker, DiNodejs,
  DiAngularSimple, DiSass, DiLaravel, DiMongodb, DiPostgresql, DiMysql, DiGit
} from 'react-icons/di';
import { SiTypescript, SiScala, SiElixir, SiErlang, SiPerl, SiClojure, SiDart,
  SiHaskell, SiVim, SiSolidity, SiFortran, SiJulia, SiR, SiFsharp
} from 'react-icons/si';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

interface Props {
  repo?: Repo;
  username: string;
  hideForks: boolean;
}

// Mapping languages to Devicon icons
const languageIcons: Record<string, JSX.Element> = {
  JavaScript: <DiJavascript1 className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  Python: <DiPython className="text-blue-400" />,
  Java: <DiJava className="text-red-500" />,
  HTML: <DiHtml5 className="text-orange-600" />,
  CSS: <DiCss3 className="text-blue-600" />,
  Go: <DiGo className="text-blue-400" />,
  Rust: <DiRust className="text-orange-500" />,
  Swift: <DiSwift className="text-orange-400" />,
  Ruby: <DiRuby className="text-red-400" />,
  PHP: <DiPhp className="text-purple-500" />,
  Kotlin: <DiKotlin className="text-purple-500" />,
  CSharp: <DiCsharp className="text-green-500" />,
  CPlusPlus: <DiCplusplus className="text-blue-600" />,
  Docker: <DiDocker className="text-blue-400" />,
  NodeJS: <DiNodejs className="text-green-600" />,
  Angular: <DiAngularSimple className="text-red-600" />,
  Sass: <DiSass className="text-pink-500" />,
  Laravel: <DiLaravel className="text-red-600" />,
  MongoDB: <DiMongodb className="text-green-500" />,
  PostgreSQL: <DiPostgresql className="text-blue-600" />,
  MySQL: <DiMysql className="text-blue-500" />,
  Git: <DiGit className="text-orange-500" />,
  Scala: <SiScala className="text-red-600" />,
  Elixir: <SiElixir className="text-purple-500" />,
  Erlang: <SiErlang className="text-red-500" />,
  Perl: <SiPerl className="text-blue-600" />,
  Clojure: <SiClojure className="text-blue-400" />,
  Dart: <SiDart className="text-blue-400" />,
  Haskell: <SiHaskell className="text-purple-500" />,
  VimScript: <SiVim className="text-green-500" />,
  Solidity: <SiSolidity className="text-gray-400" />,
  Fortran: <SiFortran className="text-blue-600" />,
  Julia: <SiJulia className="text-purple-500" />,
  R: <SiR className="text-blue-500" />,
  FSharp: <SiFsharp className="text-blue-500" />,
};

const RepoCard: React.FC<Props> = ({ repo, username, hideForks }) => {
  if (!repo || (repo.fork && hideForks)) return null;

  const imgLink = `https://github.com/${username}/${repo.name}/blob/main/preview.png?raw=true`;

  return (
    <div className="max-w-sm mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={imgLink}
        alt={`${repo.name} preview`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h5 className="text-lg font-semibold text-white">{repo.name}</h5>
        <p className="text-sm text-gray-300 mt-2">{repo.description}</p>
        <div className="flex justify-center items-center space-x-4 mt-4 text-gray-400">
          {repo.stargazers_count > 0 && (
            <a href={`${repo.html_url}/stargazers`} className="flex items-center">
              <span>⭐ {repo.stargazers_count}</span>
            </a>
          )}
          {repo.language && (
            <span className="flex items-center space-x-2">
              {languageIcons[repo.language] || <span>{repo.language}</span>}
            </span>
          )}
          {repo.forks_count > 0 && (
            <span>
              🍴 {repo.forks_count}
            </span>
          )}
        </div>
        <a
          href={repo.html_url}
          className="block bg-red-500 text-white font-semibold text-center py-2 mt-6 rounded hover:bg-red-600"
        >
          Find more!
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
