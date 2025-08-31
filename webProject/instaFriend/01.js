let istatus = document.querySelector("h5");
console.log(istatus);
let addFriend = document.querySelector("#addFriend");
let touch = 0;
addFriend.addEventListener("click", () => {
  if (touch === 0) {
    istatus.innerHTML = "Friend";
    istatus.style.color = "blue";
    addFriend.innerHTML = "Remove";
    addFriend.style.backgroundColor = "#dadada";
    addFriend.style.color = "#111";
    touch++;
  } else { 
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    touch--;
    addFriend.style.backgroundColor = "cadetblue";
    addFriend.style.color = "white";
  }
});