import React, { JSX } from 'react';
import { GithubOriginal, COriginal, BashOriginal } from 'devicons-react';
import {
  DiJavascript1, DiPython, DiJava, DiHtml5, DiCss3, DiGo, DiRust,
  DiSwift, DiRuby, DiPhp, DiDocker, DiNodejs,
  DiAngularSimple, DiSass, DiLaravel, DiMongodb, DiPostgresql, DiMysql, DiGit
} from 'react-icons/di';
import {
  SiTypescript, SiScala, SiElixir, SiErlang, SiPerl, SiClojure, SiDart,
  SiHaskell, SiVim, SiSolidity, SiFortran, SiJulia, SiR, SiFsharp,
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

const languageIcons: Record<string, JSX.Element> = {
  JavaScript: <DiJavascript1 className="text-yellow-400" size={40} />,
  C: <COriginal size={40} />,
  Shell: <BashOriginal size={40} />,
  TypeScript: <SiTypescript className="text-blue-500" size={40} />,
  Python: <DiPython className="text-blue-400" size={40} />,
  Java: <DiJava className="text-red-500" size={40} />,
  HTML: <DiHtml5 className="text-orange-600" size={40} />,
  CSS: <DiCss3 className="text-blue-600" size={40} />,
  Go: <DiGo className="text-blue-400" size={40} />,
  Rust: <DiRust className="text-orange-500" size={40} />,
  Swift: <DiSwift className="text-orange-400" size={40} />,
  Ruby: <DiRuby className="text-red-400" size={40} />,
  PHP: <DiPhp className="text-purple-500" size={40} />,
  Docker: <DiDocker className="text-blue-400" size={40} />,
  NodeJS: <DiNodejs className="text-green-600" size={40} />,
  Angular: <DiAngularSimple className="text-red-600" size={40} />,
  Sass: <DiSass className="text-pink-500" size={40} />,
  Laravel: <DiLaravel className="text-red-600" size={40} />,
  MongoDB: <DiMongodb className="text-green-500" size={40} />,
  PostgreSQL: <DiPostgresql className="text-blue-600" size={40} />,
  MySQL: <DiMysql className="text-blue-500" size={40} />,
  Git: <DiGit className="text-orange-500" size={40} />,
  Scala: <SiScala className="text-red-600" size={40} />,
  Elixir: <SiElixir className="text-purple-500" size={40} />,
  Erlang: <SiErlang className="text-red-500" size={40} />,
  Perl: <SiPerl className="text-blue-600" size={40} />,
  Clojure: <SiClojure className="text-blue-400" size={40} />,
  Dart: <SiDart className="text-blue-400" size={40} />,
  Haskell: <SiHaskell className="text-purple-500" size={40} />,
  VimScript: <SiVim className="text-green-500" size={40} />,
  Solidity: <SiSolidity className="text-gray-400" size={40} />,
  Fortran: <SiFortran className="text-blue-600" size={40} />,
  Julia: <SiJulia className="text-purple-500" size={40} />,
  R: <SiR className="text-blue-500" size={40} />,
  FSharp: <SiFsharp className="text-blue-500" size={40} />,
};

const RepoCard: React.FC<Props> = ({ repo, username, hideForks }) => {
  if (!repo || (repo.fork && hideForks)) return null;

  const imgLink = `https://github.com/${username}/${repo.name}/blob/main/preview.png?raw=true`;

  return (
    <div className="mb-8">
      <div className="border-l border-zinc-400 mt-4">
        <div className="ml-4 flex flex-row">
          <div className="basis-1/4">
            <img
              src={imgLink}
              width={100}
              height={100}
              alt={`${repo.name} preview`}
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
          <div className="basis-3/4 pl-2">
            <p className="text-2xl font-bold break-all">{repo.name}</p>
            <div className="flex items-center space-x-4">
              {repo.language && (
                <span className="flex items-center space-x-2">
                  {languageIcons[repo.language] || <span>{repo.language}</span>}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <a href={`${repo.html_url}/stargazers`} className="flex items-center">
                  <span>⭐ {repo.stargazers_count}</span>
                </a>
              )}
              {repo.forks_count > 0 && (
                <span className="flex items-center space-x-2">
                  <img
                    src="/git-fork.svg"
                    width={20}
                    height={20}
                    alt="forks of the repo"
                  />
                  {repo.forks_count}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="ml-6 mt-4">
          <p className="text-slate-100 font-bold">{repo.description}</p>
        </div>

        <div className="flex space-x-4 mt-2 ml-4">
          {repo.html_url && (
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <GithubOriginal size="40"
                className="mx-2"
              />
              <span>View Code</span>
            </a>
          )}
          {repo.html_url && (
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
              <img src="external-link.png"
                width={35}
                height={35}
                className="mr-2"
              />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
