// business logic
var counter = Math.floor(Math.random() * 7);
function Player(name) {
  this.name = name;
  this.score = 0;
  this.cumulative = 0;
  this.die1 = [1,2,3,4,5,6];
  this.dieRoll = 0;
}

Player.prototype.roll = function() {
  this.dieRoll= this.die1[Math.floor(Math.random()*this.die1.length)];
  if(this.dieRoll === 1) {
    this.score = 0;
    counter++;
  }

  else {
    this.score += this.dieRoll;
  }
}

Player.prototype.hold = function() {
  this.cumulative+= this.score
  this.score = 0;
}

$(function() {
  function playerTurn(turnPlayer, otherPlayer) {
    $("#" + otherPlayer + "Turn").text("");
    $("#" + turnPlayer + "Turn").html("<h4>Your Turn</h4>");
  }

  function holding (player, otherPlayer, turnPlayer) {
    player.hold();
    $("#" + turnPlayer + "Score").text(player.score);
    $("#" + turnPlayer + "Cumulative").text(player.cumulative);
    playerTurn(otherPlayer, turnPlayer);
    if(player.cumulative >= 100){
      winner(turnPlayer);
    }
  }
  function rolling(player, otherPlayer, turnPlayer){
    player.roll();
    $(".dieValue").text(player.dieRoll);
    $("#" + turnPlayer + "Score").text(player.score);
    if (player.dieRoll === 1) {
      playerTurn(otherPlayer, turnPlayer);
    }
    if (player.cumulative + player.score >= 100) {
      winner(turnPlayer);
    }
  }
  function compRoll(player, otherPlayer, turnPlayer) {
    (setTimeout(function() {
      player.roll();
      $(".dieValue").text(player.dieRoll);
      $("#player1Score").text(player.score);
      if(player.cumulative + player.score >= 100) {
        winner(turnPlayer);
      }
      if(player.score < 15 && player.dieRoll !== 1) {
        compRoll(player, otherPlayer, turnPlayer);
      }
      else if (player.dieRoll === 1) {
       $("#player1Score").text(player.score);
       $("button").prop("disabled", false);
       playerTurn(otherPlayer,turnPlayer);
      }
      else {
        player.hold();
        if(player.cumulative >= 100) {
          winner(turnPlayer);
        }
        counter++;
        $("#player1Score").text(player.score);
        $("#player1Cumulative").text(player.cumulative);
        $("button").prop("disabled", false);
        playerTurn(otherPlayer,turnPlayer);
      }
    }, 1000));
  }

  $("form").submit(function(event) {
    event.preventDefault();
    var name1 = $("#name1").val();
    var name2 = $("#name2").val();
    var player1 = new Player(name1);
    var player2 = new Player(name2);
    $("#gameScreen").fadeIn(1000);
    $("#startScreen").slideUp();
    $("#grass").hide();
    if (player1.name === "" || player2.name === ""){
      if(name1 === "") {
        var player1 = new Player(name1);
      }
      else {
        var player1 = new Player(name1);
      }
      var player2 = new Player("Computer");
      $(".player1Name").text(player1.name);
      $(".player2Name").text(player2.name);
      counter = 0;
      playerTurn("player1", "player2");

      $("#rollButton").click(function(){
        $("#rollButton").toggleClass("animated shake");
        if(counter % 2 === 0) {
          player1.roll();
          $(".dieValue").text(player1.dieRoll);
          $("#player1Score").text(player1.score);
          if (player1.dieRoll === 1) {
            playerTurn("player2", "player1");
            $("button").prop("disabled", true);
            compRoll(player1, "player1", "player2");
          }
          if(player1.cumulative + player2.score >= 100) {
            winner("player1");
          }
        }
      });
      $("#holdButton").click(function() {
        player1.hold();
        $("#player1Score").text(player1.score);
        $("#player1Cumulative").text(player0.cumulative);
        playerTurn("player2", "player1");
        $("button").prop("disabled", true);
        compRoll(player2, "player1", "player2");
        if(player1.cumulative >= 100) {
          winner("player1");
        }
        counter++;
      });
    }
    else {
      $(".player1Name").text(player1.name);
      $(".player2Name").text(player2.name);
      if(counter % 2 === 0) {
        playerTurn("player1", "player2");
      }
      else {
        playerTurn("player2", "player1");
      }
      $("#rollButton").click(function(){
        $("#rollButton").toggleClass("animated shake");
        if(counter % 2 === 0) {
          rolling(player1, "player2", "player");
        }
        else {
          rolling(player2, "player1", "player2");
        }
      });
      $("#holdButton").click(function() {
        if(counter % 2 === 0) {
          holding(player1, "player2", "player1");
        }
        else {
          holding(player2, "player1", "player2");
        }
        counter++;
      });
    }
  });
  $(".playAgain").click(function() {
    document.location.reload(true);
  });
});
