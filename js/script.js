
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

