let contador = document.getElementById('contador');
let juego = document.getElementById('juego');
let rectangulo = document.getElementById('rectangulo');

rectangulo.addEventListener("click", handleClick);
let puntuacion=0;
contador.innerHTML=puntuacion;

function handleClick(){
    randWidth=Math.random()*100;
    randHeight=Math.random()*100;

    randAlto=Math.random()*(window.innerHeight-randHeight-150);
    randAncho=Math.random()*(window.innerWidth-randWidth);

    rectangulo.style.width=`${randWidth}px`;
    rectangulo.style.height=`${randHeight}px`;
    rectangulo.style.top=`${randAlto}px`;
    rectangulo.style.left=`${randAncho}px`;
    puntuacion++
    contador.innerHTML=puntuacion;

}