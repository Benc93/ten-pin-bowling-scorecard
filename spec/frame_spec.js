describe('Frame', function(){

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('scoring:', function(){

    it ('can add a roll score', function(){
      frame.addRoll(5);
      expect(frame.roll).toEqual(5);
    });

    it ('can add a second roll score', function(){
      frame.roll = 1
      frame.addRoll(5);
      expect(frame.roll2).toEqual(5);
    });

    it ('can sum rolls into a frame score', function(){
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.score).toEqual(9);
    });
  });

  describe('bonuses:', function(){

    it ('can identify a spare', function(){
      frame.addRoll(5);
      frame.addRoll(5);
      expect(frame.bonusStatus()).toEqual('spare');
    });

    it ('can identify a strike', function(){
      frame.addRoll(10);
      expect(frame.bonusStatus()).toEqual('strike');
    });

    it ('can identify an open frame', function(){
      frame.addRoll(8);
      frame.addRoll(1);
      expect(frame.bonusStatus()).toEqual('open');
    });

  });
});
