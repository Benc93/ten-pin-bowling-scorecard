describe('Game', function(){
var frame, game;

  beforeEach(function() {
    frame = new Frame();
    game = new Game();
  });

  describe('ordering:', function(){

    it ('initialises with zero frames', function(){
      expect(game.frames.length).toEqual(0)
    });

    it ('can add a new frame', function(){
      game.newFrame();
      expect(game.frames.length).toEqual(1)
    });

    it ('can identify the current frame', function(){
      game.newFrame();
      game.newFrame();
      expect(game.currentFrame()).toEqual(game.frames[1])
    });

    it ('can create a new frame at the start of the game', function(){
      game.createNextFrame();
      expect(game.frames.length).toEqual(1);
    })

    it ('can create a new frame when the current frame is finished', function(){
      game.newFrame();
      game.currentFrame().addRoll(10);
      game.createNextFrame();
      expect(game.frames.length).toEqual(2);
    })




  });

});
