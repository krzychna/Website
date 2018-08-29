function Particle(x,y){
  this.location = p5.Vector.random2D();
  this.base = createVector(x,y);
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.target = createVector(x,y);
  this.mag = 0.1;
  this.comeBack = false;
}

Particle.prototype.update = function(){
  // this.vel.limit(1);
  this.vel.add(this.acc);
  this.location.add(this.vel);
};

Particle.prototype.distance = function(){
  this.acc = p5.Vector.sub(this.target,this.location);
  this.acc.normalize();
  this.acc.mag(this.mag);
};

Particle.prototype.draw = function(w,r,g,b){
  strokeWeight(w);
  if(this.comeBack) {
    stroke(r,g,b);
  }else{
    stroke(r-20,g-20,b-20);
  }
  point(this.location.x,this.location.y);
};

Particle.prototype.behave = function(w,r,g,b,v){
  this.distance();
  this.draw(w,r,g,b);
  this.status(v);
  this.reach();
  this.update();
};

Particle.prototype.reach = function(){
  push();
  if(this.location.x > this.base.x - 100 && this.location.x < this.base.x + 100 &&
     this.location.x > this.base.x - 100 && this.location.y < this.base.y + 100 && this.comeBack){
    this.vel.limit(5);
    this.mag = 2;
  }
  if(this.location.x > this.base.x - 5 && this.location.x < this.base.x + 5 &&
     this.location.x > this.base.x - 5 && this.location.y < this.base.y + 5 && this.comeBack){
    this.vel.limit(0.01);
    this.mag = 0.01;
  }
  pop();
};

Particle.prototype.status = function(v){
  push();
  if( (mouseX > 220 || mouseY > 500) && mouseX < windowWidth && mouseX > 0 && mouseY < windowHeight && mouseY > 0){
    stroke(255,0,0);
    this.vel.limit(v);
    this.target.x = mouseX;
    this.target.y = mouseY;
    this.comeBack = false;
  }else {
    this.target.x = this.base.x;
    this.target.y = this.base.y;
    this.comeBack = true;
  }
  pop();
};
