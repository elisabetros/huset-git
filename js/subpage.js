let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/music/"+id)
  .then(e=>e.json())
  .then(showSinglePost)


function showSinglePost(aPost){
  console.log(aPost);

         document.querySelector(".price").textContent = aPost.acf.price + " kr";
            if(aPost.acf.price == 0){
              document.querySelector(".price").textContent = "Free";
              }
            document.querySelector(".genre").textContent = aPost.acf.genre;
          document.querySelector(".descript").innerHTML = aPost.content.rendered;
            document.querySelector(".title").textContent = aPost.title.rendered;
            document.querySelector(".presale span").textContent = aPost.acf.presale_price;
            if (aPost.acf.presale_price == ""){
             document.querySelector(".presale").remove();
            }

          /* if (aPost.links["wp:featuredmedia"]) { //img is there
                document.querySelector("img").setAttribute("src", aPost._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url)
            } else { // no img
                document.querySelector("img").remove()
            };*/

 }

  //show carsection
  //document.querySelector("#singleCon").classList.add("slideInCar");
