const player1 = localStorage.getItem("player1");
const player2 = localStorage.getItem("player2");

const resultOne = document.querySelector(".player1_result");
const resultTwo = document.querySelector(".player2_result");

if (player1 && player2) {
  resultOne.innerHTML = player1;
  resultTwo.innerHTML = player2;
  let avatar = document.querySelectorAll("#avatar");
  for (let i = 0; i < avatar.length; i++) {
   avatar[i].style.width="50%"
  }
}
