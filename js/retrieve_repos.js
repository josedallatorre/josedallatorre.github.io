user = 'josedallatorre'
apirepo = `https://api.github.com/users/${user}`
//listrepos = document.createElement('column')
const work = document.getElementById('works');
var row = document.createElement("div")
//row.classList.add("row folio-list block-lg-one-half block-stack-on-550")
$.getJSON(apirepo + '/repos', function (data) {
    console.log('data now', data)

    function compare(a, b) {
        if (a.watchers > b.watchers) {
            return -1
        }
        if (a.watchers < b.watchers) {
            return 1
        }
        return 0
    }

    data.sort(compare)
    data.forEach(v => {
        //column
        var new_col = document.createElement("div")
        new_col.classList.add("column")
        //new_col.classList.add("data-animate-el")
        row.appendChild(new_col)
            //folio-item div
            folio_item = document.createElement('div')
            folio_item.classList.add("folio-item")
            new_col.appendChild(folio_item)
                //folio-item__thumb
                folio_item__thumb = document.createElement('div')
                folio_item__thumb.classList.add("folio-item__thumb")
                folio_item.appendChild(folio_item__thumb)
                    //folio -item-link
                    folio_item__thumb_link = document.createElement('a')
                    folio_item__thumb.classList.add("folio-item__thumb-link")
                    folio_item__thumb.appendChild(folio_item__thumb_link)
                        //img
                        //preview = document.createElement('img')
                        //folio_item__thumb.classList.add("src")
                        //folio_item__thumb.appendChild(folio_item__thumb_link)
                        

                //folio-item__info
                    //folio-item__meta
            
                    //h4 folio-item__title
            
                //folio-item__caption
                folio_item__caption = document.createElement('div')
                folio_item__caption.classList.add("folio-item__caption")
                caption = document.createElement('p')
                caption.textContent = `${v.description} | Stars: ${v.watchers}`
                folio_item__caption.appendChild(caption)
                folio_item.appendChild(folio_item__caption)

        listItemRepo = document.createElement('div')
        listItemRepo.classList.add("folio-item")
        hlink = document.createElement('a')
        listItemRepo.appendChild(hlink)
        hlink.textContent = `${v.description} | Stars: ${v.watchers}`
        hlink.href = v.html_url
        //new_col.appendChild()
    })
})