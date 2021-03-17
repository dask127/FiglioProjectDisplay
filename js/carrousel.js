//init carrousel

let slideIndex = 1;

setDotsId();
showSlides(slideIndex);

// let auto_slide = setInterval(() => {
//     showSlides(slideIndex++);
// }, 5000); // Change image every 2 seconds


//prev & next selectors
document.querySelector("#prev").addEventListener("click", lessSlides);
document.querySelector("#next").addEventListener("click", plusSlides);





//----------------------------------------------------------------------------------
//functions

function setDotsId() {
    let aux_dots = document.querySelectorAll(".dot");

    let j = 1;
    aux_dots.forEach(span => {
        span.addEventListener("click", currentSlide);
        span.id = "dot-carrousel_" + j;
        j++;
    });
}


// Next/previous controls
function plusSlides() {
    showSlides(slideIndex += 1);
}

function lessSlides() {
    showSlides(slideIndex -= 1);
}

//cuando clickeo el dot, paso a su slide predeterminada
function currentSlide() {
    let id_properties = this.id.split("_")
    showSlides(slideIndex = id_properties[1]);
}


function showSlides(n) {
    //agarra las fotos (divs)
    let slides = document.querySelectorAll(".mySlides");

    //si el index es mayor a la cantidad de imagenes vuelve al inicio
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    //o si es menor a 1 es porque tiene que volver al final
    else if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    //agarra el punto correspondiente a la slide
    let dot = document.querySelector("#dot-carrousel_" + slideIndex);

    //hace que todas las slides no aparezcan
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add("slides_hidden");
    }

    //hace que aparezca la actual
    slides[slideIndex - 1].classList.toggle("slides_hidden");

    //consigo todos los dots
    let dots = dot.parentElement;

    //le saco el "active" a todos los dots
    dots.childNodes.forEach(aux_dot => {
        //Pregunto si es un span, para evitar los "#text" vacios
        if (aux_dot.tagName == "SPAN") {
            aux_dot.classList.remove("dot_active");
        }
    });

    //le doy "active" al dot que lo necesita
    dot.classList.add("dot_active");

}


function setPostionControllers() {

}