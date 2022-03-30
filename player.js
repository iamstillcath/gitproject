const form = document.querySelector("#input");
const currPlayer = document.querySelector(".current_player");
const showLi = document.getElementById("player1");
const showLii = document.getElementById("player2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let playerInput = document.getElementById("player_input");

  let username = document.createElement("p");

  username.textContent = playerInput.value;

  let playerOne = new XMLHttpRequest();
  let pObj;

  playerOne.open(
    "GET",
    "https://api.github.com/users/" + username.innerHTML + "",
    true
  );
  playerInput.value = "";
  playerOne.responseType = "text";
  playerOne.send(null);

  playerOne.onload = function () {
    if (playerOne.status === 404) {
      let names = document.getElementById("calc");
      names.innerHTML = "USER NOT FOUND";
      names.style.fontSize = "46px";
      names.style.fontWeight = "bold";
    }

    if (playerOne.status === 200) {
      if (currPlayer.innerText === "Player One") {
        showLi.className = "show";
      } else {
        showLii.className = "shows";
      }

      pObj = JSON.parse(playerOne.responseText);
      document.getElementById("avatar").src = pObj.avatar_url;

      let names = document.getElementById("name");
      if (pObj.name === null) {
        names.innerHTML = "null";
      } else {
        names.innerHTML = "Name:" + pObj.name;
      }
      document.getElementById("username").innerHTML = "Username:" + pObj.login;
      document.getElementById("followers").innerHTML =
        "Follower:" + pObj.followers;
      document.getElementById("following").innerHTML =
        "Following:" + pObj.following;
      document.getElementById("public").innerHTML =
        "Public repo:" + pObj.public_repos;
      document.getElementById("calc").innerHTML =
        pObj.followers + pObj.following + pObj.public_repos / 2;

      const line = document.querySelectorAll(".line");
      for (let i = 0; i < line.length; i++) {
        line[i].style.visibility = "visible";
      }
    } else {
      playerOne.status === 404;
      let names = document.getElementById("calc");
      names.innerHTML = "USER NOT FOUND";
      names.style.fontSize = "46px";
      names.style.fontWeight = "bold";
    }

    if (currPlayer.innerText === "Player One") {
      localStorage.setItem(
        "player1",
        document.getElementById("player1").innerHTML
      );
      localStorage.setItem(
        "calculate",
        document.getElementById("calc").innerHTML
      );

      setTimeout(() => {
        window.location.href = "./player2.html";
      }, 1000);
    } else if (currPlayer.innerText === "Player Two") {
      localStorage.setItem(
        "player2",
        document.getElementById("player2").innerHTML
      );
      localStorage.setItem(
        "caculate",
        document.getElementById("calc").innerHTML
      );

      setTimeout(() => {
        window.location.href = "./next.html";
      }, 1000);
    }
  };
});
