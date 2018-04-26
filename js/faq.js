
function fetchFaq() {
            fetch("http://valsdottir.net/kea/07-cms/wordpress/wp-json/wp/v2/pages/42")
                .then(e => e.json())
                .then(showFaq)
        }
function showFaq(answers){
    console.log(answers);
    document.querySelector(".faq").textContent= answers.content.rendered;
}
