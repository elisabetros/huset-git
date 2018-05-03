window.addEventListener('load',()=>{
  let menuOpen = false;
  let menuIcon = document.querySelector(".menuicon")
  let menu = document.querySelector(".menu");
    let appbar = document.querySelector(".appbar")
  menuIcon.addEventListener('click', toggleMenu);

  function toggleMenu(){
    menuOpen = !menuOpen;
    menuIcon.classList.toggle("rotate");
    menu.classList.toggle("hidden");
      appbar.classList.toggle("shadow");

  }

let genbtn = document.querySelector(".showbtn");
let showhide = document.querySelector(".genres")
    genbtn.addEventListener("click", showGenres)
    function showGenres(){
        if (showhide.style.display === "none") {
    showhide.style.display = "block";
    genbtn.style.border="none";
    } else {
        showhide.style.display = "none";
        genbtn.style.border="1px solid #fff";
    }
    }

let venbtn = document.querySelector(".showbtnt");
let showhidet = document.querySelector(".venues")
venbtn.addEventListener("click", showVenues)
function showVenues(){
        if (showhidet.style.display === "none") {
    showhidet.style.display = "block";
    venbtn.style.border="none";
    } else {
        showhidet.style.display = "none";
        venbtn.style.border="1px solid #fff";
    }
    }

 fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/tags")
    .then(e=>e.json())
    .then(buildFilter)

  function buildFilter(data){
    let parentElement = document.querySelector(".genres ul");
    data.forEach(item => {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = item.name;
      a.href="index.html?tag="+item.id;

      li.appendChild(a);
      parentElement.appendChild(li);


    })
  }


});

function showLoader(){
    let loader = document.querySelector(".container");
    loader.classList.remove("hiddenloader");
    document.querySelector("footer").classList.add("hiddenloader");
}
function hideLoader(){
    let loader = document.querySelector(".container");
    loader.classList.add("hiddenloader");
    document.querySelector("footer").classList.remove("hiddenloader");
}
