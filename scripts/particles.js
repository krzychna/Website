/*jshint esversion: 6 */
var hover = document.querySelectorAll('.safe');
var safe = true;

  for(let i = 0; i < hover.length; i++){
    hover[i].onmouseenter = function(e){
      if(this.matches(".safe")){
        safe = true;
      }
    };
  }
  for(let i = 0; i < hover.length; i++){
    hover[i].onmouseleave = function(e){
      if(this.matches(".safe")){
        safe = false;
      }
    };
  }


document.addEventListener('mouseleave', function(e){
  safe = true;
});
document.addEventListener('mouseenter', function(e){
  safe = false;
});

function Particle(x,y,targetX,targetY){
  this.location = createVector(x,y);
  this.base = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.target = createVector(0,0);
  this.mag = 0;
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
  safe === true ? stroke('rgba(255,255,255,0.9)'): stroke('rgba(255,255,255,1)');
  point(this.location.x,this.location.y);
};

Particle.prototype.behave = function(){
  this.distance();
  this.reach();
  this.status();
  this.draw();
  this.update();
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
    this.vel.limit(15);
    this.mag = 10;
    this.target.x = mouseX;
    this.target.y = mouseY;
    this.comeBack = false;
  }else {
    if(this.location.dist(this.target) < 2){
      this.vel.limit(0);
      this.mag = 0;
    }
    else if(this.location.dist(this.target) < 450){
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
