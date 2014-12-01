describe('Frame', function(){

  var game, frame, ball;

  beforeEach(function() {
    frame = new Frame();
    ball  = new Ball();
  });

  describe('ordering:', function(){

    it ('initialise with no throws added', function(){
      expect(frame.balls.length).toEqual(0);
    });

    it ('initialise with no position in the game', function(){
      expect(frame.position).toEqual(0);
    });

    it ('can have throws added', function(){
      expect(frame.balls.length).toEqual(0);
      frame.addBall(ball);
      expect(frame.balls.length).toEqual(1);
    });


    it ('can be set a valid position in the game', function(){
      frame.addPosition(5);
      expect(frame.position).toEqual(5);
    });

    it ('reject an invalid game position', function(){
      expect(frame.addPosition(11)).toEqual("Invalid frame position");
    });

    it ('reject an ball if the frame is full', function(){
      var ball2 = new Ball()
      var ball3 = new Ball()

      frame.addBall(ball)
      frame.addBall(ball2)
      expect(frame.addBall(ball3)).toEqual("This frame is full");
    });

    
  });

  describe('scoring:', function(){

    it ('initialise with a score of zero', function(){
      expect(frame.score).toEqual(0);
    });

    it ('add the score of a throw to the frame\'s score', function(){

      ball.addScore(5);
      frame.addBall(ball);
      expect(frame.score).toEqual(5);
    });      


  });

  });