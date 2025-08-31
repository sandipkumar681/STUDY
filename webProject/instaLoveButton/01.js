let mainContainer = document.querySelector(".mainContainer");
let icon = document.querySelector("i");
let clk = 0;
mainContainer.addEventListener("dblclick", () => {
  if (clk === 0) {
    icon.style.color = "red";
    icon.style.opacity = "0.8";
    icon.style.transform="translate(-50%, -50%) scale(2)";
    icon.style.transition="all ease-out 0.3s";
    clk++;
    setTimeout(() => {
        icon.style.opacity = "0";
    }, 1000);
  }else{
    icon.style.color="white";
        icon.style.opacity = "0.7";
    icon.style.transform="translate(-50%, -50%) scale(2)";
    icon.style.transition="all ease-out 0.3s";
    clk--;
    setTimeout(() => {
        icon.style.opacity = "0";
    }, 1000);
  }
});