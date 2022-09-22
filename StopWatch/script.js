
let sec=00;
let hour=00;
let min=00;

let getSeconds= document.querySelector(".sec");
let getMins= document.querySelector(".mins");
let getHour= document.querySelector(".hour");

let btnStart=document.querySelector('.btn-start');
let btnStop=document.querySelector('.btn-stop');
let btnReset=document.querySelector('.btn-reset');

let Interval;

btnStart.addEventListener('click',()  =>{
    clearInterval(Interval);
    Interval=setInterval(startTimer,10);
})
btnStop.addEventListener('click',() =>{
    clearInterval(Interval);
})
btnReset.addEventListener('click',() => {

    clearInterval(Interval);
  
    hour='00';
    mins='00';
    sec='00';

    getSeconds.innerHTML=sec;
    getHour.innerHTML=hour;      
})

function startTimer(){
    hour++;
    if(hour<=9)
    {
        getHour.innerHTML='0'+hour;
    }
    if(hour>9){
        getHour.innerHTML=hour;
    }
    if(hour>99){
        sec++;
        getSeconds.innerHTML='0'+sec;
        hour=0;
        getHour.innerHTML='0'+0;
    }
    if(sec>9){
        getSeconds.innerHTML=sec;
    }
    if(sec>59){
        mins++
        getMins.innerHTML='0'+mins;
        sec=0;
        getSeconds.innerHTML='0'+0;
    }
    if(mins>9)
    {
        getSeconds.innerHTML=mins;
    }
}
