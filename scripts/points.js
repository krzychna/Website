function Punkt(x,y,id){
  this.x = x;
  this.y = y;
  this.id = id;
}

Punkt.prototype.draw = function(){
    stroke('rgba(150, 150,150,0.4)');
    strokeWeight(1.5);
    point(this.x,this.y);
  };

Punkt.prototype.update = function(){
  this.y++;
  if(this.y > height){
    this.x = random(this.id/100, width);
    this.y = random(-height*0.6,0);
  }
};
