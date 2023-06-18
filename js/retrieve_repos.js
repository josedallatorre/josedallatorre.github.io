const url = "https://api.github.com/users/josedallatorre/repos?per_page=1ii";

$.get(url, function(data) {

  console.log(data);
  for (let i in data) {
  let sortedRepos = data.sort((a,b) => parseFloat(b.stargazers_count) - parseFloat(a.stargazers_count));
  let repoName = sortedRepos[i].name;
  let repoDescription = sortedRepos[i].description;
  let repoLink = sortedRepos[i].html_url;
  let repoStars = sortedRepos[i].stargazers_count;
  let languages = [];
  $.get(sortedRepos[i].languages_url, function(languageData) {
    for(let i = 0; i < Object.keys(languageData).length; i++) {
      languages.push(Object.keys(languageData)[i]);
    }
  });
  $(document).ready(function() {
    for (let i in data){
      var iDiv = document.createElement('div');
      document.getElementsByTagName('container')[0].appendChild(iDiv);
    $("#repoLink").attr('href', repoLink);
    $("#repoTitle").html(repoName);
    $("#repoStars").html(repoStars);
    $("#repoDescription").html(repoDescription);
    iDiv.appendChild(repoLink)
    //New Code
    let languageList = $("#repoLanguageList");
    setTimeout(function() {
      for(let i = 0; i < languages.length; i++) {
        languageList.append(`<li><strong>${languages[i]}</strong></li>`);
      }
    });
};
  });
};
});
async function updateRepos() {
    const xhr = new XMLHttpRequest();

    const url = 'https://api.github.com/users/josedallatorre/repos';

    xhr.open('GET', url, true);
    xhr.onload = function() {
    
      // Parse API data into JSON
      const data = JSON.parse(this.response);
      
      // Log the response
      //console.log(data);
      
      // Loop over each object in data array
      for (let i in data) {
        var col = $('<div class="column" data-animate-el></div>');
        var newCard = $('<div class="folio-item"></div>')

        var cardInfo = $('<div class="folio-item__info"></div>')
        var name = data[i].name;
        var newName = $('<div class="folio-item__title"></div>')
        newName.appendChild(document.createTextNode(name))
        cardInfo.append(newName)
        newCard.append(cardInfo)
        col.append(newCard)
	    /* 
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

        var link = document.createTextNode("Check out this project!");
        newRepoUrl.appendChild(link);
        newRepoUrl.title = "Repo link";
        newRepoUrl.href = repoUrl;
        newCard.appendChild(newRepoUrl);
        */
        $("#works").append(col);
      }

  }
  
  // Send the request to the server
  xhr.send();
  
}

updateRepos();
