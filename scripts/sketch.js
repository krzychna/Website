var myFont;
var points;
var vectors;

function preload(){
  myFont = loadFont('scripts/a.ttf');
}

function setup() {
  var divCan = document.getElementById('canvas');
  var width = divCan.clientWidth;
  var canvas = createCanvas(width, 200);
  canvas.parent('canvas');

  points = myFont.textToPoints('Krzysztof Nowak', width/5, 125, 120, {
    sampleFactor: 0.1
  });
  for (var i = 0; i < points.length; i++) {
    var curPoint = points[i];
    stroke(255);
    point(curPoint.x,curPoint.y);
    vectors = createVector(curPoint.x,curPoint.y);
  }
  console.log(vectors);
}

function draw() {
    textFont(myFont);
    background(51);

    }
