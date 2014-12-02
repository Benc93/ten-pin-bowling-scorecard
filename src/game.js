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
  this.score += frame.score;
}

