document.querySelector("#aside_btn").addEventListener("click", toggleAside);

let aside = document.querySelector("#article_aside");

function toggleAside() {
    aside.classList.toggle("aside_hidden");
    aside.classList.toggle("aside_shown");
}