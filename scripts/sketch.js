/*jshint esversion: 6 */
var canvas;
var drop = [];
var rain = 400;
var heightScroll = document.querySelector('html').scrollHeight;
console.log(heightScroll);
function setup() {
  canvas = createCanvas(windowWidth,heightScroll);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.style('position', 'sticky');
  canvas.style('top' , '0');
  background('rgba(51,51,51,0.4)');
  for(var i = 0; i < rain; i++){
    drop.push(new Drop());
  }
}

function draw() {

  for(var i = 0; i < rain; i++){
    drop[i].behave();
  }

  if(!(frameCount%7)){
      background('rgba(51,51,51,0.5)');
  }
  // console.log(points[2].y);
}

function windowResized(){
  // width = divCan.offsetWidth;
  // height = divCan.offsetHeight;
  resizeCanvas(windowWidth,windowHeight);
}
