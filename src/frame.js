function Frame() {
};

Frame.prototype.addRoll = function(score) {
  this.addRollScore(score);
  this.sumRolls();
}

Frame.prototype.sumRolls = function() {
 this.score = (this.roll + this.roll2)
}

Frame.prototype.addRollScore = function(score) {
  if (this.roll > 0){
    this.roll2 = score;
  }
  else {
    this.roll = score;
  }
}

Frame.prototype.bonusStatus = function() {
  if (this.roll2 > 0 && this.score === 10){ 
    return 'spare';
  }
  else if (this.roll === 10) {
    return 'strike';
  }
  else { return 'open'};
}


