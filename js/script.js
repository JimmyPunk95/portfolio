let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById('nav').classList="";
        menuVisible = false;
    }else{
        document.getElementById('nav').classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById('nav').classList="";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("html");
        habilidades[1].classList.add("css");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("php");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("mysql");
        habilidades[6].classList.add("comunicacion");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("iniciativa");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("independencia");
        habilidades[11].classList.add("empatia");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}