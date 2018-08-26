/*jshint esversion: 6 */
var font;
var textDot;
var dots =[];
var canv,strokeDrop,colR,colG,colB,strokeSlider,r,g,b,ranText,inpText;
function preload(){
  font = loadFont('Titillium_Web/TitilliumWeb-Light.ttf');
}

function setup(){
  canv = createCanvas(windowWidth,windowHeight);
  canv.position(0,0);
  strokeSlider = createSlider(1,7,3,0.1);
  strokeSlider.position(10,30);
  ranText = createInput('');
  ranText.position(10,280);
  colR = createSlider(0,255,255,1);
  colR.position(10,80);
  colG = createSlider(0,255,0,1);
  colG.position(10,130);
  colB = createSlider(0,255,0,1);
  colB.position(10,180);
  background(255);
  inpText = 'Krzysztof Nowaks portfolio';
  textDot = font.textToPoints(inpText, 250, height/2, 64,
  {sampleFactor : 0.23,
  simplifyThreshold: 0});
  for( var i = 0; i < textDot.length; i++){
    dots.push(new Particle(textDot[i].x,textDot[i].y));
  }
}

function draw(){
  ranText.input(function(){
    inpText = ranText.value();
    textDot = font.textToPoints(inpText, 250, height/2, 64,
    {sampleFactor : 0.23,
    simplifyThreshold: 0});
    while(dots.length !== 0){
      dots.pop();
    }
    for( var i = 0; i < textDot.length; i++){
      dots.push(new Particle(textDot[i].x,textDot[i].y));
    }
  })

  background('rgba(255,255,255,0.15)');
  strokeDrop = strokeSlider.value();
  r = colR.value();
  g = colG.value();
  b = colB.value();
  textSize(16);
  fill(0, 0, 0);
  noStroke();
  text('Weight: ' + strokeDrop, 10, 10, 100, 100);
  text('Red: ' + r, 10, 60, 100, 100);
  text('Green: ' + g, 10, 110, 100, 100);
  text('Blue: ' + b, 10, 160, 100, 100);
  text('Your text: \n' + inpText, 10, 210, 200, 200);
  text('Number of dots: ' + dots.length, 10, 310, 100, 100);
  stroke(0);
  strokeWeight(1);
  noFill();
  rect(0,0,200,350);
  for( var j = 0; j < dots.length; j++){
    dots[j].behave(strokeDrop,r,g,b);
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}
