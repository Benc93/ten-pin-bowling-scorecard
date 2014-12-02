function Frame() {
  this.score    = 0;
  this.position = 0;
  this.balls    = [];
  this.status   = "open";
};

Frame.prototype.addPosition = function(position){
  if (position > 0 && position < 11) {
    this.position = position;
  }
  else {
    return "Invalid frame position";
  };
};

Frame.prototype.addBall = function(ball) {
  
  if (this.balls.length < 2) {
  this.setBallPosition(ball);
  this.addBallScore(ball);
  this.balls.push(ball);
  }
  else
  return "This frame is full"
};

Frame.prototype.setBallPosition = function(ball) {
  ball.position = this.balls.length + 1
}

Frame.prototype.addBallScore = function(ball) {
  if ((ball.score + this.score) < 11){
    this.score += ball.score
  }
  else {
    return "Exceeds frame score limit"
  }
}

Frame.prototype.checkMax = function() {
  return frame.score === 10;
}

Frame.prototype.setSpare = function() {
  this.status = "spare";
}

Frame.prototype.setStrike = function() {
  this.status = "strike";
}

Frame.prototype.setOpen = function() {
  this.status = "open";
}


