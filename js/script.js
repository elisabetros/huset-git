let template = document.querySelector("#musictemp").content;
let musiclist = document.querySelector("#musiclist");
showLoader()
      function fetchMusic() {

let urlParams = new URLSearchParams(window.location.search);
let tagid = urlParams.get("tag");
let endpoint = "http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/music?_embed&per_page=100"
  if(tagid){
    endpoint = "http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/music?_embed&per_page=100"+ "&tags="+tagid
  }
    fetch(endpoint)
      .then(e => e.json())
      .then(showMusic);


}
           /* fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/music?_embed&per_page=100")
                .then(e => e.json())
                .then(showMusic)
        }*/

        function showMusic(data) {
            hideLoader()
             document.querySelector(".page").classList.remove("hiddenloader");
            data.forEach(showSingleEvent);
        }

        function showSingleEvent(aEvent) {

            let clone = template.cloneNode(true);
            let day= aEvent.acf.date.substring(0,2);
            let month = aEvent.acf.date.substring(2,4);
            let year = aEvent.acf.date.substring(4,8);
            clone.querySelector(".date").textContent=day+"."+month+"."+year;
            clone.querySelector(".venue").textContent=aEvent.acf.venue;

            clone.querySelector(".price").textContent = aEvent.acf.price + " kr";
            if(aEvent.acf.price == 0){
              clone.querySelector(".price").textContent = "Free";
              }
            clone.querySelector(".genre").textContent = aEvent.acf.genre;
            //clone.querySelector(".descript").innerHTML = aEvent.content.rendered;
            clone.querySelector(".title").textContent = aEvent.title.rendered;
            /*clone.querySelector(".presale span").textContent = aEvent.acf.presale_price;
            if (aEvent.acf.presale_price == ""){
             clone.querySelector(".presale").remove();
            }*/

           if (aEvent._embedded["wp:featuredmedia"]) { //img is there
                clone.querySelector("img").setAttribute("src", aEvent._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
            } else { // no img
                clone.querySelector("img").setAttribute("src", "img/default.jpg");


            };

             clone.querySelector(".readmore").href="subpage.html?id=" + aEvent.id;
             musiclist.appendChild(clone);
 }


        fetchMusic();





