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







/*function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "Score: " + diceTotal;
  $("#score").append(dice1+dice2);
}
//if(d1 == d2){
    //status.innerHTML += " DOUBLES! You get a free turn!!";
//}

/*function rollDice(){
    var die1 = document.getElementById("die3");
    var die2 = document.getElementById("die4");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d3 + d4;
    die1.innerHTML = d3;
    die2.innerHTML = d4;
    status.innerHTML = diceTotal;
}*/
