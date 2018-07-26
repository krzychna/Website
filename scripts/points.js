function Punkt(x,y,id){
  this.x = x;
  this.y = y;
  this.id = id;
  this.speed = random(1,3);
}
Punkt.prototype.draw = function(){
    stroke('rgba(200,200,255,0.6)');
    strokeWeight(2);
    point(this.x,this.y);
  };

Punkt.prototype.update = function(){
  this.y +=this.speed;
  if(this.y > windowHeight){
    this.x = random(this.id/100, windowWidth);
    this.y = random(-windowHeight*0.6,0);
    this.speed = random(1,3);
  }
};
