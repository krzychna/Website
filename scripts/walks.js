var canv,w,colR,colG,colB,stepsSlider;
var strokeSlider, speedSlider,r,g,b,v,s,no;
var walker = [];
function setup(){
  canv = createCanvas(windowWidth,windowHeight);
  canv.position(0,0);
  speedSlider = createSlider(1,2000,100,10);
  speedSlider.position(10,30);
  strokeSlider = createSlider(1,7,2,0.1);
  strokeSlider.position(10,80);
  colR = createSlider(0,255,255,1);
  colR.position(10,130);
  colG = createSlider(0,255,255,1);
  colG.position(10,180);
  colB = createSlider(0,255,255,1);
  colB.position(10,230);
  stepsSlider = createSlider(0,100000,100,1);
  stepsSlider.position(10,380);
  background(255);
  no =2;
  frameRate(24);
  for (var i = 0; i < no; i++) {
    walker.push(new Walker);
  }
}

function draw(){
  background('rgba(240,240,240,0.01)');
  v = speedSlider.value();
  w = strokeSlider.value();
  r = colR.value();
  g = colG.value();
  b = colB.value();
  s = stepsSlider.value();
  fill(255);
  stroke(0);
  strokeWeight(1);
  rect(0,0,200,420);
  textSize(16);
  fill(0, 0, 0);
  text('Speed: ' + v, 10, 10, 100, 100);
  text('Weight: ' + w, 10, 60, 100, 100);
  text('Red: ' + r, 10, 110, 100, 100);
  text('Green: ' + g, 10, 160, 100, 100);
  text('Blue: ' + b, 10, 210, 100, 100);
  text('After how many steps without collision change color: ' + s, 10, 260, 100, 200);
  for (var i = 0; i < v; i++) {
    for (var j = 0; j < walker.length; j++) {
      walker[j].behave(w,r,g,b,s);
    }
  }

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}
