function Punkt(x,y,id){
  this.x = x;
  this.y = y;
  this.id = id;
  this.speed = random(1,3.2);
  this.size = random(1,4);
}
Punkt.prototype.draw = function(){
  strokeWeight(this.size);
  if(this.speed>3) {
    stroke('rgba(255,200,200,1)');
  }
  else if(this.speed>2) {
    stroke('rgba(200,200,255,0.8)');
  }
  else if(this.speed>1) {
    stroke('rgba(200,255,200,0.8)');
  }
    point(this.x,this.y);
  };

Punkt.prototype.update = function(){
  this.y +=this.speed;
  this.size -= 0.02;
  if(this.y > windowHeight || this.size < 0.1){
    this.x = random(this.id/100, windowWidth);
    this.y = random(-windowHeight*0.01,0);
    this.speed = random(1,4);
    this.size = random(1,4);
  }
};
