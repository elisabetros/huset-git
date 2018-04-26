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

 fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/pages")
    .then(e=>e.json())
    .then(buildMenu)

  function buildMenu(data){
    let parentElement = document.querySelector(".menu ul");
    data.forEach(item => {
      //console.log(item);
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.textContent = item.title.rendered;
      a.href=item.title.rendered+".html";
        if(item.id == 97){
            a.href = "index.html";
        }

      li.appendChild(a);
      parentElement.appendChild(li);


    })
  }









});
