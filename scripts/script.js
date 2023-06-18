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
      /*<div class="bgrid folio-item">
	               <div class="item-wrap">
	               	<img src="images/portfolio/liberty.jpg" alt="Liberty">
	                  <a href="#modal-01" class="overlay">	                  	           
	                     <div class="folio-item-table">
	                     	<div class="folio-item-cell">
		     					       <h3 class="folio-title">Liberty</h3>	     					    
		     					    	 <span class="folio-types">
		     					       	  Graphic Design
		     					       </span>
		     					   </div>	                      	
	                     </div>                    
	                  </a>
	               </div>	               
	        		</div> <!-- /folio-item -->

      */
      for (let i in data) {
        const newCard = document.createElement("div");
        newCard.setAttribute("class","bgrid folio-item");
        const itemWrapper= document.createElement("div");
        itemWrapper.setAttribute("class","item-wrapper");
        const img = document.createElement("img");
        img.src="images/portfolio/liberty.jpg" 
        itemWrapper.appendChild(img)
        newCard.appendChild(itemWrapper)
        var name = data[i].name;
        var newName = document.createElement("H3");
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

        var link = document.createTextNode("Check out this project!");
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
