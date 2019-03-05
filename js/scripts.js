// Business Logic
function Player(total, score) {
  this.total = 0;
  this.score = 0;
}

Player.prototype.holdScore = function() {
  this.score += this.total;
}

Player.prototype.rollDice = function() {
  var random = randomNum();
  if (random > 1) {
    this.total += random;
  } else {
    alert("You rolled a 1! Next player's turn!")
    this.total = 0;
  }
}

function randomNum() {
  return Math.floor(Math.random() * 6) + 1
}
//user interface logic
$(document).ready(function() {

var player1 = new Player();
var player2 = new Player();

  // Players
  $("button#roll-btn-1").click(function() {
    player1.rollDice();
    $(".current-score-1").text(player1.total);

  });

  $("button#roll-btn-2").click(function() {
    player2.rollDice();
    $(".current-score-2").text(player2.total);

  });

  // Hold
  $("button#hold-btn-1").click(function(event) {
    event.preventDefault();
    player1.holdScore();
    $(".total-score-1").text(player1.score);
    player1.total = 0;
    $(".current-score-1").text(player1.total);
  });

  $("button#hold-btn-2").click(function(event) {
    event.preventDefault();
    player2.holdScore();
    $(".total-score-2").text(player2.score);
    player2.total = 0;
    $(".current-score-2").text(player2.total);
  });
});
