/*jshint esversion: 6 */
var font;                                                           // for loading font and referencing it later
var textDot;                                                        // array containing dots from text
var dots =[];                                                       // array of objects
var canvas;                                                         // canvas
var drop = [];                                                      // array of drops
var rain = 400;                                                     // number of drops
var refElement = document.querySelector('.active');                 // reference element for checking of its position
var posChanged;                                                     // variable which contains value of top offset of refElement
var maxWidthOfText;                                                 // max x in dots of text
var minWidthOfText;                                                 // min x in dots of text
var exes = [];                                                      // array for 'x's' from textDot
var heightScroll = document.querySelector('html').scrollHeight;     // height of canvas
var mobileViewPort = window.matchMedia('screen and (max-device-width: 1200px)'); // media query
var headerText = document.querySelector('.portfolio');
var drawLogo = true;
var portfolioSize = 48;
var densityDot = 0.25;
var hover = document.getElementsByClassName('safe');

function checkingViewPort(e){
  if(e.matches){
    drawLogo = false;
  }else{
    drawLogo = true;
  }
  // console.log(drawLogo);
}
checkingViewPort(mobileViewPort);
mobileViewPort.addListener(checkingViewPort);

function preload(){
  font = loadFont('fonts/Titillium_Web/TitilliumWeb-Light.ttf');
}

function setup() {
  heightScroll = document.querySelector('html').scrollHeight;
  canvas = createCanvas(windowWidth,heightScroll);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  canvas.style('position', 'sticky');
  canvas.style('top' , '0');
  background('rgba(51,51,51,0.4)');
  for(let i = 0; i < rain; i++){
    drop.push(new Drop());
  }
  textDot = font.textToPoints("Krzysztof Nowak's portfolio", windowWidth/2, windowHeight/5, portfolioSize,
  {sampleFactor : densityDot,
  simplifyThreshold: 0});
  for( let i = 0; i < textDot.length; i++){
    exes.push(textDot[i].x);
  }
  maxWidthOfText = Math.max.apply(Math,exes);
  minWidthOfText = Math.min.apply(Math,exes);
  for( let i = 0; i < textDot.length; i++){
    dots.push(new Particle(textDot[i].x-((maxWidthOfText-minWidthOfText)/2),textDot[i].y, mouseX, mouseY));
  }
}

function draw() {
  // console.log(frameRate());
  for(let i = 0; i < rain; i++){
    drop[i].behave();
  }
  if(drawLogo){
    for(let i = 0; i < dots.length; i++){
      dots[i].behave();
    }
    headerText.textContent = "";
  }else{
    headerText.textContent = "Krzysztof Nowak's portfolio";
  }
  background('rgba(51,51,51,0.4)');
}

function windowResized(){
  heightScroll = document.querySelector('html').scrollHeight;
  resizeCanvas(windowWidth,heightScroll);
  if(drawLogo){
    changePosition(windowWidth,heightScroll);
  }
}

function changePosition(x,y){
  posChanged = refElement.getBoundingClientRect();
  if(posChanged.y < 30 ){
    textDot = font.textToPoints("Krzysztof Nowak's portfolio", x/2, y/5, portfolioSize,
    {sampleFactor : densityDot,
    simplifyThreshold: 0});
    centering();
  }else{
    textDot = font.textToPoints("Krzysztof Nowak's portfolio", x/2, 50, portfolioSize,
    {sampleFactor : densityDot,
    simplifyThreshold: 0});
    centering();
  }
}

function centering (){
  for( let i = 0; i < textDot.length; i++){
    exes[i] = textDot[i].x;
  }
  maxWidthOfText = Math.max.apply(Math,exes);
  minWidthOfText = Math.min.apply(Math,exes);
  for( let i = 0; i < dots.length; i++){
    dots[i].changePos(textDot[i].x - ((maxWidthOfText-minWidthOfText)/2),textDot[i].y);
  }
}
