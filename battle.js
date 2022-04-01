const player1 = localStorage.getItem("player1");
const player2 = localStorage.getItem("player2");
const calculat = localStorage.getItem("calculate");
const calculatee = localStorage.getItem("caculate");
const score = document.getElementById("score");
const score2 = document.getElementById("score2");


const firstPlayer = document.querySelector(".firstPlayer");
const secPlayer = document.querySelector(".secPlayer");

if (calculat >calculatee) {
  firstPlayer.innerHTML += player1;
  secPlayer.innerHTML += player2;
  score.innerHTML += calculat+"😒";
  score2.innerHTML += calculatee+"🤣";
} else {
  secPlayer.innerHTML += player1;
  firstPlayer.innerHTML += player2;
  score2.innerHTML += calculat+"😒";
  score.innerHTML += calculatee+"🤣";
}

let avatar = document.querySelectorAll("#avatar");
for (let i = 0; i < avatar.length; i++) {
  avatar[i].style.width = "50%";
}


