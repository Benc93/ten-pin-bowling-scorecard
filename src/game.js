function Game() {
  this.frames = [];
};

Game.prototype.newFrame = function() {
  this.frames.push(new Frame())
}

Game.prototype.currentFrame = function() {
  return this.frames[this.frames.length-1]
}

Game.prototype.createNextFrame = function() {
  if (this.preGame) {
    this.newFrame(); 
  }
  else if (this.frames.length < 10 && this.endOfCurrentFrame) {
    this.newFrame() 
  };
  
}

Game.prototype.preGame = function(){
  this.frames.length === 0
}

Game.prototype.endOfCurrentFrame = function(){
  this.currentFrame().bonusStatus() != 'live';
}





