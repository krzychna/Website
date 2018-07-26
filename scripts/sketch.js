/*jshint esversion: 6 */
var canvas;
var width;
var height;
var divCan;
function setup() {
  divCan = document.getElementById('reference');
  width = divCan.offsetWidth;
  height = divCan.offsetHeight;
  canvas = createCanvas(width,height);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background('rgba(51,51,51,0.4)');
}

var nOfPoints = 400;
var points = [];
function draw() {

  if(points.length < nOfPoints){
    for(let i = 0; i < nOfPoints; i++){
    points.push(new Punkt(random(i/nOfPoints,windowWidth), random(-windowHeight,0),i));
    }
  }
  while(points.length<nOfPoints){

  }

  if(!(frameCount%2)){
    for(let i = 0; i<points.length; i++){
      points[i].draw();
      points[i].update();
    }
  }

  if(!(frameCount%8)){
      background('rgba(51,51,51,0.4)');
  }
  // console.log(points[2].y);
}

function windowResized(){
  width = divCan.offsetWidth;
  height = divCan.offsetHeight;
  resizeCanvas(width,height);
}
