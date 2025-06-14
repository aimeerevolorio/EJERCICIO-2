var indice = 1;
mostrar(indice);

function avanzar(n) {
    mostrar(indice+=n);
}

function mostrar(n) {
    var i;
    var normal = document.getElementsByClassName("imgs");
    var mini = document.getElementsByClassName("mini");

    indice = n;

    for (i=0; i<normal.length; i++) {
        normal[i].style.display="none";
    }

    for (i=0; i<mini.length; i++) {
        mini[i].className = mini[i].className.replace(" sin-transparencia", "");
    }

    if (n>normal.length) {
        indice = 1;
    }

    if (n<1) {
        indice = normal.length;
    }
    normal[indice-1].style.display="block";
    mini[indice-1].className += " sin-transparencia";
}
