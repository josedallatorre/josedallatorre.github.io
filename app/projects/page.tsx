'use client'
// pages/index.tsx
import React, { useEffect, useState } from 'react';
import RepoCard from '../components/repocard';

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

const maxPages = 2;
const username = "josedallatorre";
const hideForks = false;

const HomePage: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      let allRepos: Repo[] = [];
      for (let i = 1; i <= maxPages; i++) {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?&sort=pushed&per_page=100&page=${i}`
        );
        const data = await response.json();
        allRepos = allRepos.concat(data);
      }
      allRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      setRepos(allRepos);
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects">
      <p className="text-3xl font-bold">Here are some of my projects. Not all are shown for various reasons.</p>
      <div id="repos" className="">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} username={username} hideForks={hideForks} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
