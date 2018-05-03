let arrow = document.querySelectorAll('.arrow::after');
let info = document.querySelectorAll(".info");
arrow.forEach(clickArrow);
function clickArrow(a){
    a.addEventListener('click', unfold);
    function unfold(){
        a.parentElement.parentElement.classList.toggle('unfold');
    }
}
info.forEach(clickInfo);
function clickInfo(e){
    e.addEventListener('click', unfoldTwo);
    function unfoldTwo(){
        e.classList.toggle('unfold');
    }
}
