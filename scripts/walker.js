/*jshint esversion: 6 */
function Walker(){
  this.x = width/2;
  this.y = height/2;
  this.way = 0;
  this.steps = 0;
  this.possible = new Array(4).fill(false);
  this.color = new Array(3).fill(random(0,255));
}

Walker.prototype.pickWay = function(){
  this.way = floor(random(0,4));
  while(!(this.possible[this.way])){
    this.way = floor(random(0,4));
  }
  return this.way;
};

Walker.prototype.walk = function(){
  switch(this.pickWay()){
    case 0:
      this.y--;
    break;
    case 1:
      this.x++;
    break;
    case 2:
      this.y++;
    break;
    case 3:
      this.x--;
    break;
  }
};

Walker.prototype.draw = function(w){
  strokeWeight(w);
  stroke(this.color[0],this.color[1],this.color[2]);
  point(this.x,this.y);
};

Walker.prototype.check = function(r,g,b){
  if(this.y - 1 < 420 && this.x < 200 || this.y - 1 < 0) {
    this.possible[0] = false;
    this.changeColor(r,g,b);
  }
  else this.possible[0] = true;

  if(this.x + 1 > width) {
    this.possible[1] = false;
    this.changeColor(r,g,b);
  }
  else this.possible[1] = true;

  if(this.y + 1 > height) {
    this.possible[2] = false;
    this.changeColor(r,g,b);
  }
  else this.possible[2] = true;

  if(this.x - 1 < 200 && this.y < 420 || this.x - 1 < 0) {
    this.possible[3] = false;
    this.changeColor(r,g,b);
  }
  else this.possible[3] = true;
};

Walker.prototype.behave = function(w,r,g,b,s){
  this.steps++;
  if (this.steps > s) {
    this.changeColor(r,g,b)
    this.steps = 0;
  }
  this.check(r,g,b);
  this.walk();
  this.draw(w);
};

Walker.prototype.changeColor = function(r,g,b){
  this.color[2] = random(0,b);
  this.color[1] = random(0,g);
  this.color[0] = random(0,r);

};
