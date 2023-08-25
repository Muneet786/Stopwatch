var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

var gethrs = document.getElementById('hrs')
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmilli = document.getElementById('msec')
var interval


function start(){
    
    interval = setInterval(function(){
        milliseconds++
        getmilli.innerHTML = milliseconds
        if (milliseconds >=99){
            seconds++
            getsec.innerHTML = seconds
            milliseconds = 0
        }
        else if (seconds >=59){
           minutes++
           getmin.innerHTML = minutes
           seconds = 0
        }
        else if( minutes >=59){
           hours++
           gethrs.innerHTML = hours
           minutes = 0
        }
    },1)
    document.getElementById('sss').disabled = true
} 

function stop(){
    clearInterval(interval)
    document.getElementById('sss').disabled = false
}

function reset(){
     hours = 0;
     minutes = 0;
     seconds = 0;
     milliseconds = 0;
     gethrs.innerHTML = hours
     getmin.innerHTML = minutes
     getsec.innerHTML = seconds
     getmilli.innerHTML = milliseconds

}