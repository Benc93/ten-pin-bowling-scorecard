describe('Game', function(){
  
  var game, frame, frame2;

  beforeEach(function() {
    game  = new Game();
    frame = new Frame();
    frame2 = new Frame();
  });

  describe('ordering:', function(){

    it ('can have frames added', function(){
      expect(game.frames.length).toEqual(0);
      game.addFrame(frame);
      expect(game.frames.length).toEqual(1);
    });

    it ('can set the frame\'s position', function(){
      game.frames.length = 5
      game.addFrame(frame);
      expect(frame.position).toEqual(6);
    });

    it ('reject a frame is the game is full', function(){
      game.frames.length = 11
      expect(game.addFrame(frame)).toEqual("Too many frames");
    });
  });

  describe('scoring:', function(){

    it ('initialise with a game score of zero', function(){
      expect(game.score).toEqual(0);
    });

    it ('can sum basic frame scores', function(){

      frame.score =  8; 
      frame2.score = 9;   
      game.addFrame(frame);
      game.addFrame(frame2);
      expect(game.score).toEqual(17);
    });


    
    
  });

});
