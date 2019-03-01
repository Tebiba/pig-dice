// business logic

function rollDice(){
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "Score: " + diceTotal;
}
if(d1 == d2){
    status.innerHTML += " DOUBLES! You get a free turn!!";
}

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
