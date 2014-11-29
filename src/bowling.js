function Frame() {
  this.score    = 0
  this.position = 0
};

Frame.prototype.addPosition = function(position){
  if (position > 0 && position < 11) {
    this.position = position;
  }
  else {
    return "Invalid frame position";
  };
};

Frame.prototype.addScore = function(score) {
  if (score > 0 && score < 11) {
    this.score = score;
  }
  else {
    return "Invalid score";
  };
};

function Game() {
  this.score       = 0;
  this.frames      = [];
};

Game.prototype.addFrame = function(frame) {
  this.setFramePosition(frame)
  this.addFrameScore(frame)
  this.frames.push(frame);
};

Game.prototype.setFramePosition = function(frame) {
  frame.position = this.frames.length + 1
}

Game.prototype.addFrameScore = function(frame) {
  this.score += frame.score
}
