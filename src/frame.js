function Frame() {
  this.score    = 0;
  this.position = 0;
  this.balls    = [];
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
  this.score += ball.score
}