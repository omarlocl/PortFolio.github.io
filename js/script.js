const btn_hamburguer = document.querySelector("#nav-bar");
const header = document.querySelector("#header");
const nav = document.querySelector("#nav");
const body = document.body;

let letActual = 0;
let status_button = true;

btn_hamburguer.addEventListener("click", function() {
    nav.classList.toggle("active");
    "if(status_button){
        body.setAttribute("style", "overflow:hidden;");
    }abelse {
        body.removeAttribute("style", "overflow:hidden;");
    }
il});

function efectoHabilidades(){
    var skills = document.getElementById("#skills");
    var distancia_skills = window.inneHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("vs");
    }
}

