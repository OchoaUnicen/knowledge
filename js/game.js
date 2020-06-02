document.addEventListener('DOMContentLoaded', function () {

"use strict";

let frame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

let canvas = document.getElementById('lienzo');
let context = canvas.getContext('2d'); 







tiempo();




function tiempo() {
    //hace ejecutar 60 veces por segundo
    frame(tiempo);
   


}

    
});