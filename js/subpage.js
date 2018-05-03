let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/music/"+id+ "?_embed")
  .then(e=>e.json())
  .then(showSinglePost)


function showSinglePost(aPost){
  console.log(aPost);

        let day= aPost.acf.date.substring(0,2);
            let month = aPost.acf.date.substring(2,4);
            let year = aPost.acf.date.substring(4,8);
           document.querySelector(".date").textContent=day+"."+month+"."+year;

         document.querySelector(".price").textContent = aPost.acf.price + " kr";
            if(aPost.acf.price == 0){
              document.querySelector(".price").textContent = "Free";
              }
            document.querySelector(".genre").textContent = aPost.acf.genre;
          document.querySelector(".descript").innerHTML = aPost.content.rendered;
         document.querySelector(".subtitle").textContent = aPost.title.rendered;
     document.querySelector(".venue").textContent = aPost.acf.venue;
            document.querySelector(".presale span").textContent = aPost.acf.presale_price;
            if (aPost.acf.presale_price == ""){
             document.querySelector(".presale").remove();
            }

          if (aPost._embedded["wp:featuredmedia"]) { //img is there
                document.querySelector(".concertimg").setAttribute("src", aPost._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
            } else { // no img
                document.querySelector(".concertimg").setAttribute("src", "img/default.jpg");
            };

 }

  //show carsection
  //document.querySelector("#singleCon").classList.add("slideInCar");
