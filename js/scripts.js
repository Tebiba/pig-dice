// business logic
var counter = Math.floor(Math.random() * 6) + 1;
function Player(name) {
  this.name = name;
  this.currently = 0;
  this.total = 0;
  this.die1 = [1,2,3,4,5,6];
  this.dieRoll = 0;
}

Player.prototype.roll = function() {
  this.dieRoll= this.die1[Math.floor(Math.random()*this.die1.length)];
  if(this.dieRoll === 1) {
    this.currently = 0;
    counter++;
  }

  else {
    this.currently += this.dieRoll;
  }
}

Player.prototype.hold = function() {
  this.total += this.currently;
  this.currently = 0;
}

$(function() {
  function playerTurn(turnPlayer, otherPlayer) {
    $("#" + otherPlayer + "Turn").text("");
    $("#" + turnPlayer + "Turn").html("<h1>Your Turn</h1>");
    $("." + otherPlayer + " img").removeClass("animated zoomIn");
    $("." + otherPlayer + " img").addClass("desaturate");
    $("." + turnPlayer + " img").addClass("animated zoomIn");
    $("." + turnPlayer + " img").removeClass("desaturate");
  }
