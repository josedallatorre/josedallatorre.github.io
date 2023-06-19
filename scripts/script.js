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
        const newCard = document.createElement("div");
        newCard.setAttribute("class","bgrid folio-item");
        const itemWrapper= document.createElement("div");
        itemWrapper.setAttribute("class","item-wrapper");
        const img = document.createElement("img");
        img.src="images/portfolio/liberty.jpg" 
        var modalUrl = document.createElement("a");
        modalUrl.setAttribute("class", "overlay");
        modalUrl.href= "#modal-"+ i
        const folioTable = document.createElement("div");
        folioTable.setAttribute("class","folio-item-table");
        const folioCell = document.createElement("div");
        folioCell.setAttribute("class","folio-item-cell");
        
        var name = data[i].name;
        var newName = document.createElement("H3");
        newName.appendChild(document.createTextNode(name));
        newName.setAttribute("class","folio-title");
        var newType = document.createElement("span");
        newType.setAttribute("class","folio-types");
        newType.appendChild(document.createTextNode("Development"));
        folioCell.appendChild(newName);
        folioCell.appendChild(newType);
        folioTable.appendChild(folioCell)
        itemWrapper.appendChild(img)
        itemWrapper.appendChild(modalUrl)
        itemWrapper.appendChild(folioTable)
        newCard.appendChild(itemWrapper)
        

        //TODO fare come https://mayanigrin.com/ nei progetti, no modal
        var newModal = document.createElement("div");
        newModal.setAttribute("id","modal-"+i);
        newModal.setAttribute("class","popup-modal slider ");
        const newMedia = document.createElement("div");
        newMedia.setAttribute("class","media");
        const imgMedia = document.createElement("img");
        imgMedia.src="images/portfolio/modals/m-shutterbug.jpg"
        var descrBox = document.createElement("div");
        descrBox.setAttribute("class","description-box");
        var descName = document.createElement("H4");
        descName.appendChild(document.createTextNode(name));
        descrBox.appendChild(descName)
        newMedia.appendChild(imgMedia)
        newModal.appendChild(newMedia)
        newModal.appendChild(descrBox)

        /*
        var descr = data[i].description;
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

        document.getElementById("repos-container").appendChild(newCard);
        document.getElementById("modal-container").appendChild(newModal);
      }

  }
  
  // Send the request to the server
  xhr.send();
  
}

updateRepos();
