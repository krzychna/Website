/*jshint esversion: 6 */
var hover = document.getElementsByClassName('safe');
var safe;
var start;
function check (){
  for( let i = 0; i < hover.length; i++ ){
    hover[i].addEventListener('mouseout', function(){
      safe = false;
    });
    hover[i].addEventListener('mouseover', function(){
      safe = true;
    });
  }
}
document.addEventListener('mouseleave', function(e){
  safe = true;
});
document.addEventListener('mouseenter', function(e){
  safe = false;
});

check();

document.addEventListener('mousemove', function(e){
  start = true;
});

function Particle(x,y,targetX,targetY){
  this.location = createVector(x,y);
  this.base = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.target = createVector(targetX,targetY);
  this.mag = 0.1;
  this.comeBack = false;
}

Particle.prototype.update = function(){
  this.vel.add(this.acc);
  this.location.add(this.vel);
};

Particle.prototype.distance = function(){
  this.acc = p5.Vector.sub(this.target,this.location);
  this.acc.normalize();
  this.acc.mag(this.mag);
};

Particle.prototype.draw = function(){
  stroke('rgba(255,255,255,0.6)');
  point(this.location.x,this.location.y);
};

Particle.prototype.behave = function(){
  this.draw();
  if(start){
    this.distance();
    this.status();
    this.reach();
    this.update();
  }
};

Particle.prototype.reach = function(){
  push();
  if(this.location.x > this.base.x - 5 && this.location.x < this.base.x + 5 &&
     this.location.x > this.base.x - 5 && this.location.y < this.base.y + 5 ){
    this.vel.limit(0.001);
    this.mag = 0.001;
  }
  pop();
};

Particle.prototype.status = function(){
  push();
  if(!safe){
    stroke(255,0,0);
    this.vel.limit(15);
    this.mag = 10;
    this.target.x = mouseX;
    this.target.y = mouseY;
    this.comeBack = false;
  }else {
    stroke(255,255,255);
    if(this.location.dist(this.target) < 450){
      this.vel.limit(10);
      this.mag = 5;
    }else if(this.location.dist(this.target) < 50){
      this.vel.limit(0.8);
      this.mag = 0.2;
    }
    this.target.x = this.base.x;
    this.target.y = this.base.y;
    this.comeBack = true;

  }
  pop();
};

Particle.prototype.changePos = function(x,y) {
  push();
  this.base.x = x;
  this.base.y = y;
  pop();
};
