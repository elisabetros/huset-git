let template = document.querySelector("#musictemp").content;
         let musiclist = document.querySelector("#musiclist");



        function fetchMusic() {
            fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/music?_embed&per_page=100")
                .then(e => e.json())
                .then(showMusic)
        }

        function showMusic(data) {
            data.forEach(showSingleEvent);
        }

        function showSingleEvent(aEvent) {

            let clone = template.cloneNode(true);

            clone.querySelector(".price").textContent = aEvent.acf.price + " kr";
            if(aEvent.acf.price == 0){
              clone.querySelector(".price").textContent = "Free";
              }
            clone.querySelector(".genre").textContent = aEvent.acf.genre;
            clone.querySelector(".descript").innerHTML = aEvent.content.rendered;
            clone.querySelector(".title").textContent = aEvent.title.rendered;
            clone.querySelector(".presale span").textContent = aEvent.acf.presale_price;
            if (aEvent.acf.presale_price == ""){
             clone.querySelector(".presale").remove();
            }

           if (aEvent._embedded["wp:featuredmedia"]) { //img is there
                clone.querySelector("img").setAttribute("src", aEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
            } else { // no img
                clone.querySelector("img").remove()

                clone.querySelector(".readmore").href="subpage.html?id=" + aEvent.id;
            };
             musiclist.appendChild(clone);
 }


        fetchMusic();


