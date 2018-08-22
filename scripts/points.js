function Drop(){
 this.loc = createVector(random(0,width),random(-height,0));
 this.vel = createVector(0,random(1,1.7));
 this.acc = createVector(0.08,0);
 this.reject = createVector(0.1,5);
 this.distance = createVector(0,0);
 this.powerRange = 50;
}

Drop.prototype.draw = function(){
 stroke('rgba(255,100,100,1)');
 strokeWeight(1);
 point(this.loc.x,this.loc.y);
};

Drop.prototype.behave = function(){
 this.force();
 this.move();
 this.checkBoundaries();
 this.draw();
};

Drop.prototype.move = function(){
 this.loc.add(this.vel);
 if(abs(this.vel.x) < this.acc.x){
   this.vel.x = 0;
 }else if (this.vel.x > this.acc.x) {
   this.vel.x -= this.acc.x;
 }else{
   this.vel.x += this.acc.x;
 }
};

Drop.prototype.checkBoundaries = function(){
 if(this.loc.x >= width){
   this.vel.x = width;
 }
 if(this.loc.x <= 0){
   this.loc.x = 0;
 }
 if(this.loc.y >= height){
   this.loc.set(random(0,width),random(-height/2,0));
   this.vel.set(0,1.7);
 }
 // if(this.loc.y <=  0 + this.radius/2)
};

Drop.prototype.force = function(){
 this.distance.set(this.loc.x-mouseX,this.loc.y-mouseY);
 if(abs(this.distance.x) < this.powerRange && abs(this.distance.y) < this.powerRange){
   if(this.distance.x < 0){
     this.vel.x -= this.reject.x;
   }else{
     this.vel.x += this.reject.x;
   }
 }
};
