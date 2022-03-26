const form = document.querySelector("#input");
form.addEventListener("submit", function (e) {
  
  e.preventDefault();
  let player1 = document.getElementById("player1").value;

  let username = document.createElement("p");

  username.textContent = player1;


  let playerOne = new XMLHttpRequest();
  let pObj;

  playerOne.open(
    "GET","https://api.github.com/users/"
     + username.innerHTML + "",
    true
  );
  document.getElementById("player1").value="";
  playerOne.responseType = "text";
  playerOne.send(null);


  playerOne.onload = function () {
    if (playerOne.status === 200) {
      
      pObj = JSON.parse(playerOne.responseText);
      document.getElementById("avatar").src = pObj.avatar_url;

      let names = document.getElementById("name");
      if (pObj.name === null) {
        names.innerHTML = "null";
        
      } else {
        names.innerHTML = pObj.name;
      }
      document.getElementById("username").innerHTML = pObj.login;
      document.getElementById("followers").innerHTML = pObj.followers;
      document.getElementById("following").innerHTML = pObj.following;
      document.getElementById("public").innerHTML = pObj.public_repos;
      document.getElementById("calc").innerHTML = pObj.followers+pObj.following+pObj.public_repos/2;

        
  const line=document.getElementsByTagName("hr")
  line.style.visibility="visible"
  
    }
    // let buttons = document.querySelector("#submit")
    const link = document.createElement("a");
    link.href="player2.html"
    // buttons.appendChild(link)
    // console.log(buttons)
    

    document.getElementById('submit').addEventListener("click", async (e) =>{
      e.preventDefault()
      setTimeout(function () {
        link.href="player2.html"
      }, 5000)
    })
  };
});
