describe('bowling', function(){
  var game, frame; 

  beforeEach(function() {
    frame = new Frame();
    game  = new Game();
  });

  describe('frame', function(){

    describe('ordering', function(){

      it ('initialise with no position in the game', function(){
        expect(frame.position).toEqual(0);
      });

      it ('can be set a valid position in the game', function(){
        frame.addPosition(5);
        expect(frame.position).toEqual(5);
      });

      it ('reject an invalid game position', function(){
        expect(frame.addPosition(11)).toEqual("Invalid frame position");
      });
      
    });

    describe('scoring', function(){

      it ('initialise with a score of zero', function(){
        expect(frame.score).toEqual(0);
      });

      it ('record a valid score value', function(){
        frame.addScore(5);
        expect(frame.score).toEqual(5);
      });

      it ('rejects invalid score values', function(){
        expect(frame.addScore(11)).toEqual("Invalid score");
      });


    });

  });

  describe('game', function(){

    describe('ordering', function(){

      it ('can have frames added', function(){
        expect(game.frames.length).toEqual(0);
        game.addFrame(frame);
        expect(game.frames.length).toEqual(1);
      });

      it ('can set the frame\'s position', function(){
        game.addFrame(frame);
        game.addFrame(frame);
        game.addFrame(frame);
        expect(frame.position).toEqual(3);
      });

      it ('can count frames added', function(){
        game.addFrame(frame);
        game.addFrame(frame);
        expect(game.frames.length).toEqual(2);
      });


    });

    describe('scoring', function(){

      it ('initialise with a game score of zero', function(){
        expect(game.score).toEqual(0);
      });

      it ('can sum frame scores', function(){
        var frame2 = new Frame();

        frame.addScore(8);
        frame2.addScore(9);
        game.addFrame(frame);
        game.addFrame(frame2);
        expect(game.score).toEqual(17);
      });

      

    });

  });
});
