
function Game() {
  this.score       = 0;
  this.frames      = [];
};

Game.prototype.addFrame = function(frame) {

  if (this.frames.length < 11) {
  this.setFramePosition(frame);
  this.addFrameScore(frame);
  this.frames.push(frame);
  }
  else {
    return "Too many frames";
  }
};

Game.prototype.setFramePosition = function(frame) {
  frame.position = this.frames.length + 1
}

Game.prototype.addFrameScore = function(frame) {
  this.score += frame.score
}

Game.prototype.checkSpare = function(frame) {
  if ((frame.score === 10) && (frame.balls.length === 2)){
  return true;
  };
}

Game.prototype.checkStrike = function(frame) {
  if ((frame.score === 10) && (frame.balls.length === 1)){
  return true;
  };
}

