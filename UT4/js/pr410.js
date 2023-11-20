let cronometro = document.getElementById('cronometro');
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let reset = document.getElementById('reset');
let crono;
let min=0;
let seg=0;
let mil=0;
let running=false;

start.addEventListener( 'click', (event) => {
    event.preventDefault();
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
        cronometro.innerHTML=min.toString().padStart(2,"0")+":"+seg.toString().padStart(2,"0")+":"+mil.toString().padStart(3,"0");
    }, 10 )}
    running=true;
} )

pause.addEventListener( 'click', (event) => {
    event.preventDefault();
    clearInterval(crono); 
} )

reset.addEventListener( 'click', (event) => {
    event.preventDefault();
    clearInterval(crono);
    min=0;
    seg=0;
    mil=0;
    cronometro.textContent='00:00:000';
} )