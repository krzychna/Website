/*jshint esversion: 6 */
var font;
var textDot;
var dots =[];
var canv,strokeDrop,colR,colG,colB,strokeSlider,ranText,inpText,v;
function preload(){
  font = loadFont('Titillium_Web/TitilliumWeb-Light.ttf');
}

function setup(){
  canv = createCanvas(windowWidth,windowHeight);
  canv.position(0,0);
  strokeSlider = createSlider(1,7,1.9,0.1);
  strokeSlider.position(10,30);
  ranText = createInput('');
  ranText.position(10,360);
  colR = createSlider(0,255,0,1);
  colR.position(10,80);
  colG = createSlider(0,255,0,1);
  colG.position(10,130);
  colB = createSlider(0,255,67,1);
  colB.position(10,180);
  tail = createSlider(0,1,0.3,0.01);
  tail.position(10,230);
  v = createSlider(0.5,50,11,0.5);
  v.position(10,280);
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

  background('rgba(255,255,255,'+ tail.value() + ')');
  strokeDrop = strokeSlider.value();
  textSize(16);
  fill(0, 0, 0);
  noStroke();
  text('Weight: ' + strokeDrop, 10, 10, 100, 100);
  text('Red: ' + colR.value(), 10, 60, 100, 100);
  text('Green: ' + colG.value(), 10, 110, 100, 100);
  text('Blue: ' + colB.value(), 10, 160, 100, 100);
  text('Opacity of background: ' + tail.value(), 10, 210, 250, 100);
  text('Limit velocity: ' + v.value(), 10, 260, 200, 100);
  text('Your text: \n' + inpText, 10, 310, 200, 200);
  text('Number of dots: ' + dots.length, 10, 400, 220, 100);
  stroke(0);
  strokeWeight(1);
  noFill();
  rect(0,0,220,500);
  for( var j = 0; j < dots.length; j++){
    dots[j].behave(strokeDrop,colR.value(),colG.value(),colB.value(),v.value());
  }
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}
