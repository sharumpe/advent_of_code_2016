#!/usr/bin/env node

var directions = [
  'N','E','S','W'
]

var tracker = {
  facing: 0,
  N: 0,
  S: 0,
  E: 0,
  W: 0,
  distance: function() {
    var x = Math.abs(this.E - this.W);
    var y = Math.abs(this.N - this.S);
    return x+y;
  },
  turn: function(direction) {
    // console.log("s:%s/%s",this.facing,directions[this.facing]);

    // Turn around and turn around and turn around
    if (direction=='R')
      this.facing++;
    else
      this.facing--;

    // Clean up the wrap if needed
    if (this.facing>3)
      this.facing=0;
    if (this.facing<0)
      this.facing=3;

    // console.log("e:%s/%s",this.facing,directions[this.facing]);
  },
  move: function(distance) {
    // console.log("before:%s",this[directions[this.facing]])
    this[directions[this.facing]] += distance;
    // console.log("after :%s",this[directions[this.facing]])
  }
}

var input = require('./day1.json');

// Roll through the input and trigger tracker things.
input.forEach(function(elem,index,array) {
  // console.log("i:%s",elem);
  var parts = elem.match(/([LR])(\d+)/);
  var direction = parts[1];
  var distance = parseInt(parts[2]);

  tracker.turn(direction);
  tracker.move(distance);
  // console.log(d:%s",tracker.distance());
  // console.log(JSON.stringify(tracker,null,'  '));
  // console.log('--------');
})

console.log("Final Distance: %d",tracker.distance());
