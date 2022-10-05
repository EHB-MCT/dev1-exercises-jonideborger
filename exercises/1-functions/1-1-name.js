"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawName();

function drawName() {

    //J
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(200, 250);
    context.lineTo(150, 275);
    context.lineTo(100, 250);
    context.stroke();

    //O
    context.strokeStyle = "green";
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(350, 150);
    context.lineTo(300, 250);
    context.lineTo(250, 150);
    context.lineTo(300, 50);
    context.stroke();


    //N
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(400, 50);
    context.lineTo(400, 250);
    context.moveTo(400, 50);
    context.lineTo(500, 250);
    context.stroke();

}