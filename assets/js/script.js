const username = 'josedallatorre';
const maxPages = 2;
const hideForks = true;
const repoList = document.querySelectorAll('.repo-list');
const reposSection = document.querySelector('#repos');

// get information from github profile
const getProfile = async () => {
    const res = await fetch(
        `https://api.github.com/users/${username}`
        // {
        //     headers: {
        //         Accept: 'application/vnd.github+json',
        //         Authorization: 'token your-personal-access-token-here'
        //     }
        // }
    );
	const profile = await res.json();
	console.log(profile);
	updatePropic(profile);
	updatePicNavbar(profile);
};

getProfile();

const updatePropic = (profile) =>{
	const propic = document.getElementById('propic')
	propic.innerHTML = `
	<img alt = "user avatar" src=${profile.avatar_url} class="rounded-circle mw-100 mh-100"/>
	`;
	};
const updatePicNavbar = (profile) =>{
	const propic = document.getElementById('navbar-propic')
    console.log(propic);
    propic.innerHTML = `
	<img alt = "user avatar" src=${profile.avatar_url} class="rounded-circle mw-100 mh-100"/>
	`;
	};

// get list of user's public repos
const getRepos = async () => {
    let repos = [];
    let res;
    for (let i = 1; i <= maxPages; i++) {
        res = await fetch(
            `https://api.github.com/users/${username}/repos?&sort=pushed&per_page=100&page=${i}`
            // {
            //     headers: {
            //         Accept: 'application/vnd.github+json',
            //         Authorization:
            //             'token your-personal-access-token-here'
            //     }
            // }
        );
        let data = await res.json();
        repos = repos.concat(data);
    }
    repos.sort((a, b) => b.forks_count - a.forks_count);
    repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
    displayRepos(repos);
};
getRepos();

// display list of all user's public repos
const displayRepos = (repos) => {
	console.log(repos);
	console.log(repoList);
    const userHome = `https://github.com/${username}`
    for (const repo of repos) {
        if (repo.fork && hideForks) {
            continue;
        }
        const langUrl = `${userHome}?tab=repositories&q=&language=${repo.language}`
        const starsUrl = `${userHome}/${repo.name}/stargazers`
        const forksUrl = `${userHome}/${repo.name}/network/members`
        let col = document.createElement('div');
        col.classList.add('col-12')
        col.classList.add('col-lg-4');
        let card = document.createElement('div');
        card.classList.add('card');
        card.classList.add('border-warning');
        card.classList.add('text-white');
        card.classList.add('bg-secondary');
        card.classList.add('my-3');
        card.classList.add('mx-3');
        card.classList.add('text-center');
        
        let cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        cardBody.innerHTML=`
        <h5 class="card-title">${repo.name}</h5>
        <p class="card-text">${repo.description}</p>`
        let imgRepo = document.createElement("img");
        imgRepo.classList.add('img-fluid');
        let imgLink = "https://github.com/josedallatorre/"+repo.name+"/blob/main/preview.png?raw=true"
        imgRepo.src=imgLink
        let linkRepo = document.createElement("a");
        linkRepo.classList.add("btn");
        linkRepo.classList.add("btn-dark");
        linkRepo.classList.add("w-100");
        linkRepo.href=repo.html_url
        linkRepo.textContent+="Find more!"
        card.appendChild(imgRepo)
        card.appendChild(cardBody)

        let listItem = document.createElement('li');
        if (repo.stargazers_count > 0) {
            listItem.innerHTML += `<a href="${starsUrl}">
            <span>⭐ ${repo.stargazers_count}</span></a>`
        }

        if (repo.language) {
            listItem.innerHTML += `${devicons[repo.language]}`
        }

        if (repo.forks_count > 0) {
            listItem.innerHTML += `${devicons["Git"]} ${repo.forks_count}`
        }

        card.appendChild(listItem)
        card.appendChild(linkRepo)
        col.appendChild(card)
        document.getElementById('repos').append(col);

    }
};
checkLink = async url => (await fetch(url)).ok
// for programming language icons
const devicons = {
    Git: '<i class="devicon-git-plain" style="color: #555"></i>',
    Github: '<i class="devicon-github-plain" style="color: #1688f0"></i>',
    Chrome: '<i class="devicon-chrome-plain" style="color: #1688f0"></i>',
    Assembly: '<i class="devicon-labview-plain colored"></i> Assembly',
    'C#': '<i class="devicon-csharp-plain colored"></i> C#',
    'C++': '<i class="devicon-cplusplus-plain colored"></i> C++',
    C: '<i class="devicon-c-plain colored"></i> C',
    Clojure: '<i class="devicon-clojure-plain colored"></i> C',
    CoffeeScript:
        '<i class="devicon-coffeescript-plain colored"></i> CoffeeScript',
    Crystal: '<i class="devicon-crystal-plain colored"></i> Crystal',
    CSS: '<i class="devicon-css3-plain colored"></i> CSS',
    Dart: '<i class="devicon-dart-plain colored"></i> Dart',
    Dockerfile: '<i class="devicon-docker-plain colored"></i> Docker',
    Elixir: '<i class="devicon-elixir-plain colored"></i> Elixir',
    Elm: '<i class="devicon-elm-plain colored"></i> Elm',
    Erlang: '<i class="devicon-erlang-plain colored"></i> Erlang',
    'F#': '<i class="devicon-fsharp-plain colored"></i> F#',
    Go: '<i class="devicon-go-plain colored"></i> Go',
    Groovy: '<i class="devicon-groovy-plain colored"></i> Groovy',
    HTML: '<i class="devicon-html5-plain colored"></i> HTML',
    Haskell: '<i class="devicon-haskell-plain colored"></i> Haskell',
    Java: '<i class="devicon-java-plain colored" style="color: #ffca2c"></i> Java',
    JavaScript: '<i class="devicon-javascript-plain colored"></i> JavaScript',
    Julia: '<i class="devicon-julia-plain colored"></i> Julia',
    'Jupyter Notebook': '<i class="devicon-jupyter-plain colored"></i> Jupyter',
    Kotlin: '<i class="devicon-kotlin-plain colored" style="color: #796bdc"></i> Kotlin',
    Latex: '<i class="devicon-latex-plain colored"></i> Latex',
    Lua: '<i class="devicon-lua-plain-wordmark colored" style="color: #0000d0"></i> Lua',
    Matlab: '<i class="devicon-matlab-plain colored"></i> Matlab',
    Nim: '<i class="devicon-nixos-plain colored" style="color: #FFC200"></i> Nim',
    Nix: '<i class="devicon-nixos-plain colored"></i> Nix',
    ObjectiveC: '<i class="devicon-objectivec-plain colored"></i> ObjectiveC',
    OCaml: '<i class="devicon-ocaml-plain colored"></i> OCaml',
    Perl: '<i class="devicon-perl-plain colored"></i> Perl',
    PHP: '<i class="devicon-php-plain colored"></i> PHP',
    PLSQL: '<i class="devicon-sqlite-plain colored"></i> PLSQL',
    Processing:
        '<i class="devicon-processing-plain colored" style="color: #0096D8"></i> Processing',
    Python: '<i class="devicon-python-plain colored" style="color: #3472a6"></i> Python',
    R: '<i class="devicon-r-plain colored"></i> R',
    Ruby: '<i class="devicon-ruby-plain colored"></i> Ruby',
    Rust: '<i class="devicon-rust-plain colored" style="color: #DEA584"></i> Rust',
    Sass: '<i class="devicon-sass-original colored"></i> Sass',
    Scala: '<i class="devicon-scala-plain colored"></i> Scala',
    Shell: '<i class="devicon-bash-plain colored" style="color: #89E051"></i> Shell',
    Solidity: '<i class="devicon-solidity-plain colored"></i> Solidity',
    Stylus: '<i class="devicon-stylus-plain colored"></i> Stylus',
    Svelte: '<i class="devicon-svelte-plain colored"></i> Svelte',
    Swift: '<i class="devicon-swift-plain colored"></i> Swift',
    Terraform: '<i class="devicon-terraform-plain colored"></i> Terraform',
    TypeScript: '<i class="devicon-typescript-plain colored"></i> TypeScript',
    'Vim Script': '<i class="devicon-vim-plain colored"></i> Vim Script',
    Vue: '<i class="devicon-vuejs-plain colored"></i> Vue',
};
