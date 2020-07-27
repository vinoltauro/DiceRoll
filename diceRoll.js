
var random1 = Math.floor( Math.random()*6) + 1;
var random2 = Math.floor( Math.random()*6) + 1;

var temp = document.querySelector(".left-dice");
temp.src  = "images/dice" + random1 + ".png";

temp = document.querySelector(".right-dice");
temp.src  = "images/dice" + random2 + ".png";

if (random1 == random2)
document.querySelector("h1").innerHTML = "Draw";

else if (random1 > random2)
document.querySelector("h1").innerHTML = "Player 1 Won !";

else
document.querySelector("h1").innerHTML = "Player 2 Won !";
