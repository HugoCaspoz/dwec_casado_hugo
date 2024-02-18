let score = document.getElementById('score');
let juego = document.getElementById('game-zone');
let start= document.getElementById('btn-start')
            .addEventListener("click" ,startClick);
let reset = document.getElementById('btn-reset')
            .addEventListener("click", resetClick);
            
let rectangulo = document.getElementById('rectangulo');
let puntuacion=0;
score.innerHTML=puntuacion;

let time = document.getElementById('time');
let running=false;
let crono;
let seg=0;
let mil=0;
let nivel=1;
let diff = document.querySelectorAll('.diff-level');
 diff.forEach(diffLevel => {
    diffLevel.addEventListener("click", selectLevel);
 });

function selectLevel(event){
    diff.forEach(diffLevel => {
        diffLevel.classList.remove('selected');
    });
    event.target.classList.add('selected');
    nivel= event.target.textContent;
    console.log(nivel);
}

function resetClick(){
    rectangulo.removeEventListener("click",handleClick);
    puntuacion=0;
    score.innerHTML=puntuacion;
    clearInterval(crono);
    seg=0;
    mil=0;
    time.textContent='0:0';
    running=false;
    
}

function startClick(){
    rectangulo.addEventListener("click", handleClick);
    if(running==false){
    crono=setInterval( () => {
        mil++
        if (mil==100){
            mil=0;
            seg++
        }
        if (seg==60){
            seg=0;
            min++;
        }
        if (seg==5){
            clearInterval(crono);
            rectangulo.removeEventListener("click",handleClick);
        }
        time.innerHTML=seg.toString().padStart(2,"0")+":"+mil.toString().padStart(2,"0");
    }, 10 )}
    
        running=true;

}

function handleClick(){
    switch (nivel){
        case 1:
        
        break;
        case 2:
        
        break;
        case 3:
        
        break;
        case 4:
        
        break;
        case 5:
        
        break;
    }
    // hacer un array con todos los usuarios y su puntuacion, cuando se acabe el tiempo ordenas el array por puntuacion y los top 3 los dibujas por pantalla
    randWidth=Math.random()*100;
    randHeight=Math.random()*100;

    randAlto=Math.random()*(window.innerHeight-randHeight);
    randAncho=Math.random()*(window.innerWidth-randWidth-350);

    rectangulo.style.width=`${randWidth}px`;
    rectangulo.style.height=`${randHeight}px`;
    rectangulo.style.top=`${randAlto}px`;
    rectangulo.style.left=`${randAncho}px`;
    puntuacion++
    score.innerHTML=puntuacion;

}