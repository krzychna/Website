/*jshint esversion: 6 */
var canvas;
function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  background('rgba(51,51,51,0.4)');
}

var nOfPoints = 200;
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
  // width = divCan.offsetWidth;
  // height = divCan.offsetHeight;
  resizeCanvas(windowWidth,windowHeight);
}
