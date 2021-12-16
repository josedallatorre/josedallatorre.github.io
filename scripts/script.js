async function updateRepos() {
    const xhr = new XMLHttpRequest();

    const url = 'https://api.github.com/users/josedallatorre/repos';

    xhr.open('GET', url, true);
    xhr.onload = function() {
    
      // Parse API data into JSON
      const data = JSON.parse(this.response);
      
      // Log the response
      console.log(data);
      
      // Loop over each object in data array
      for (let i in data) {
        const newCard = document.createElement("div");
        var name = data[i].name;
        var newName = document.createElement("H3");
        var repoUrl = data[i].html_url;
        newName.appendChild(document.createTextNode(name))
        newCard.appendChild(newName);
	      
        var descr = "Description:\n" + data[i].description;
        var newDescr = document.createElement("p");
        newDescr.appendChild(document.createTextNode(descr))
        newCard.appendChild(newDescr);

        var lang = "Language used:\n" + data[i].language;
        var newLang = document.createElement("p");
        newLang.appendChild(document.createTextNode(lang))
        newCard.appendChild(newLang);
	
	var repoUrl = data[i].html_url;
        var newRepoUrl = document.createElement("a");

        var link = document.createTextNode("Check out this repo");
        newRepoUrl.appendChild(link);
        newRepoUrl.title = "Repo link";
        newRepoUrl.href = repoUrl;
        newCard.appendChild(newRepoUrl);

        document.getElementById("repos-container").appendChild(newCard);
      }

  }
  
  // Send the request to the server
  xhr.send();
  
}

updateRepos();
