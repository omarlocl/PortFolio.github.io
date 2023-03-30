var visible = "false";

var bar = document.getElementById("nav-bar");
bar.onclick = function() {
    if(visible == "true"){
        document.getElementById("menu").className = "active";
        visible = "false";
    }
    else {
        document.getElementById("menu").className = "";
        visible = "true";

    }
}

function seleccionar(link){
    var opciones = document.querySelectorAll('#links span');
    opciones[0].className = "linea";
    opciones[1].className = "linea";
    opciones[2].className = "linea";
    opciones[3].className = "linea";
    opciones[4].className = "linea";
    opciones[link].className = "linea seleccionado";

    var x = document.getElementById("menu");
    x.className = "";arguments
    visible = "no";

}


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

