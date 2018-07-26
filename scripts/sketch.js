/*jshint esversion: 6 */
function setup() {
  var divCan = document.getElementById('canvas');
  var width = divCan.clientWidth;
  var height = divCan.clienHeight;
  var canvas = createCanvas(width,height);
  background('rgba(51,51,51,0.4)');
}

var nOfPoints = 100;
var points = [];
function draw() {

  if(points.length < nOfPoints){
    for(let i = 0; i < nOfPoints; i++){
    points.push(new Punkt(random(i/nOfPoints,width), random(-height,0),i));
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

}
