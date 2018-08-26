var rain = 1200;
var drops = [];
var canv,strokeDrop,colR,colG,colB;
var strokeSlider, rainSlider,r,g,b,v;
function setup(){
  canv = createCanvas(windowWidth,windowHeight);
  canv.position(0,0);
  background(240);
  rainSlider = createSlider(1,3000,1200,10);
  rainSlider.position(10,30);
  strokeSlider = createSlider(1,7,2,0.1);
  strokeSlider.position(10,80);
  colR = createSlider(0,255,0,1);
  colR.position(10,130);
  colG = createSlider(0,255,0,1);
  colG.position(10,180);
  colB = createSlider(0,255,255,1);
  colB.position(10,230);
  for(var i = 0; i< rainSlider.value(); i++){
    drops.push(new Drop());
  }
}
function draw(){
  background(240);
  rain = rainSlider.value();
  strokeDrop = strokeSlider.value();
  r = colR.value();
  g = colG.value();
  b = colB.value();
  textSize(16);
  fill(0, 0, 0);
  noStroke();
  text('Drops: ' + rain, 10, 10, 100, 100);
  text('Weight: ' + strokeDrop, 10, 60, 100, 100);
  text('Red: ' + r, 10, 110, 100, 100);
  text('Green: ' + g, 10, 160, 100, 100);
  text('Blue: ' + b, 10, 210, 100, 100);
  while(drops.length < rain ){
    drops.push(new Drop());
  }
  while(drops.length >  rain){
    drops.pop();
  }
  for(var i = 0; i< rain; i++){
    drops[i].behave(strokeDrop,r,g,b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}
