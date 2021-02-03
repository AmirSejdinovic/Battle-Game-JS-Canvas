//Creating html element
const canvas = document.createElement('canvas');
//Creating grid varaiable
const grid = 25;

//Determinate the width of the canvas
canvas.setAttribute('width', grid*20);
//Determinate the height of canvas
canvas.setAttribute('height', grid*15);
//Attach the HTML element with body tag of html 
document.body.prepend(canvas);

//Init of canvas objact
const ctx = canvas.getContext('2d');



//Calling the function
drawpath();

//Function for red triangle
function drawpath(){
   ctx.fillStyle = 'blue';
   ctx.fillRect(canvas.width/2,canvas.height/2,5,5);
   ctx.fillRect(100,100,5,5);
   ctx.fillRect(100,300,5,5);
   ctx.fillStyle = 'red';
   ctx.beginPath();
   ctx.moveTo(canvas.width/2, canvas.height/2);
   ctx.lineTo(100, 100);
   ctx.lineTo(100, 300);
   ctx.lineTo(canvas.width/2, canvas.height/2);
   ctx.stroke();
   ctx.fill();



}

//Creating the function
function draw(){

  ctx.fillRect(5,10,50,30);
  ctx.strokeRect(150,10,50,30);
 }
