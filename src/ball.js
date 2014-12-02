function Ball() {
    this.score    = 0
    this.position = 0
  };

Ball.prototype.addPosition = function(position){
  if (position > 0 && position < 3) {
    this.position = position;
  }
  else {
    return "Invalid ball number";
  };
};

Ball.prototype.addScore = function(score) {
  if (score > 0 && score < 11) {
    this.score = score;
  }
  else {
    return "Invalid score";
  }
};

