describe('Ball', function(){
var game, frame, ball;

  beforeEach(function() {
    ball  = new Ball();
  });

  describe('ordering:', function(){

    it ('initialise with no position in the game', function(){
      expect(ball.position).toEqual(0);
    });

    it ('can be set a valid position in the frame', function(){
      ball.addPosition(1);
      expect(ball.position).toEqual(1);
    });

    it ('reject an invalid game position', function(){
      expect(ball.addPosition(3)).toEqual("Invalid ball number");
  });


  });

  describe('scoring:', function(){

    it ('initialise with a score of zero', function(){
      expect(ball.score).toEqual(0);
    });

    it ('record a valid score value', function(){
      ball.addScore(5);
      expect(ball.score).toEqual(5);
    });

    it ('rejects invalid score values', function(){
      expect(ball.addScore(11)).toEqual("Invalid score");
    });
  });

});

