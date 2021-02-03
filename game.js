//Creating html element
const canvas = document.createElement('canvas');
//Creating grid varaiable
const grid = 50;

//Determinate the width of the canvas
canvas.setAttribute('width', grid*20);
//Determinate the height of canvas
canvas.setAttribute('height', grid*15);
//Attach the HTML element with body tag of html 
document.body.prepend(canvas);
canvas.style.border ="1px solid black";

//Init of canvas objact
const ctx = canvas.getContext('2d');

const player = {x:10,y:canvas.height/2,size:30,speed:5};
const game  = {req:''};
console.log(player);

/*for(let i =0; i<10; i++){
   drawmove(i);
}
*/

game.req = requestAnimationFrame(draw);
canvas.addEventListener('click',()=>{
   player.speed *= -1;
})



function draw(){

   ctx.clearRect(0,0,canvas.width,canvas.height);
   console.log(player.x);
   
   player.x += player.speed;
   ctx.beginPath();
   ctx.fillStyle = 'red';
   ctx.arc(player.x,player.y,player.size,0,Math.PI*2);
   ctx.fill();
   ctx.fillStyle = 'blue';
   ctx.fillRect(player.x,player.y,5,5);
   game.req = requestAnimationFrame(draw);
}


//Calling the function
drawcir();

function drawcir(){

   ctx.beginPath();
   ctx.fillStyle = 'yellow';
   ctx.arc(300,100,50,0,Math.PI*2,true);
   ctx.fill();

   ctx.beginPath();
   ctx.fillStyle = 'black';
   ctx.moveTo(300,80);
   ctx.arc(280,80,10,0,Math.PI*2,true);

   ctx.moveTo(335,80);
   ctx.arc(320,80,10,0,Math.PI*2,true);

   ctx.moveTo(340,110);
   ctx.arc(300,110,30,0,Math.PI,false);
   ctx.fill();
}

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
function draw2(){

  ctx.fillRect(5,10,50,30);
  ctx.strokeRect(150,10,50,30);
 }
