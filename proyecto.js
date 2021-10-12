var iniciar = document.getElementById('start');
var pausa = document.getElementById('pause');
var reiniciar = document.getElementById('reset');

var pm = document.getElementById('pmin');
var ps = document.getElementById('pseg');

var iniciar_temporizador;


const progreso = document.getElementById('progreso');
let cantidad1 = 0;
let cantidad2 = 630;
var x=25;


function temporizador(){

    if(ps.innerText != 0){
        ps.innerText--;
    }else if(pm.innerText != 0 && ps.innerText == 0){
        ps.innerText = 59;
        pm.innerText--;
    }
    if(ps.innerText<10){
        ps.innerText = '0' + ps.innerText;
    }

    cantidad1+=1;
    let valor = Math.ceil(cantidad2-=(630/(x*60)))
    progreso.style.strokeDashoffset=valor;

    if(pm.innerText == 0 && ps.innerText == 0){
      restart();
      const music = new Audio('sonido.mp3');
    music.play();
    }
    
}


function empezar(){
    if(iniciar_temporizador == undefined){
        iniciar_temporizador = setInterval(temporizador,1000);
    }else {
        alert("El temporizador está funcionando en este momento");
    }

}

function restart(){
    pm.innerText = x;
    ps.innerText = "00";
    cantidad1 = 0;
    cantidad2 = 630;
    progreso.style.strokeDashoffset=630;
 
    clearInterval(iniciar_temporizador);
    iniciar_temporizador = undefined;
}

function parar(){
    clearInterval(iniciar_temporizador);
    iniciar_temporizador = undefined;
}
var min=document.getElementById('pmin');
function Pomodoro(){
    x=25;
    min.innerHTML=25;
    restart();
}
function DescansoCorto(){
    x=5;
    min.innerHTML=5;
    restart();
}
function DescansoLargo(){
    x=20;
    min.innerHTML=20;
    restart();
}

function mas(){

    if(iniciar_temporizador != undefined){
        alert("El temporizador está funcionando en este momento");
    }else{
        x++;
        if(x>=59){
            x=59;
        }
        min.innerHTML=x;
    }
}

function menos(){

    if(iniciar_temporizador != undefined){
        alert("El temporizador está funcionando en este momento");
    }else{
        x--;
        if(x<=1){
            x=1;
        }
        min.innerHTML=x;
    }
}
