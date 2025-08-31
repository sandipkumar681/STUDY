let cars = [{ name: "MERCEDES-AMG GT COUPE", type: "So Thrilling,So AMG", image: "image/greencar.png", backColor: "radial-gradient(#00fb8a, #056424)" },
{ name: "LAMBORGHINI REVUELTO", type: "Beyond The Concrete", image: "image/yellowcar.png", backColor: "radial-gradient(#ffe485,#ddaf11 )" },
{ name: "TOYOTA SUPRA", type: "Go Beyond A Victory Lap", image: "image/bluecar.png", backColor: "radial-gradient(#7E91FF,#2F3D94 )" },
{ name: "MCLAREN 5705", type: "Performance Amplified", image: "image/purplecar.png", backColor: "radial-gradient(#885E8B,#522467 )" },
{ name: "LAMBORGHINI GALLARDO", type: "Personam Coupe", image: "image/blackcar.png", backColor: "radial-gradient(#545454,#010100 )" },
{ name: "FERRARI LAFERRARI", type: "Beating Hearts", image: "image/redcar.png", backColor: "radial-gradient(#FE5752,#910D0C )" }]
let preButton = document.querySelector("#previousButton");
let nxtButton = document.querySelector("#nextButton");
let carName = document.querySelector("#carName");
let carType = document.querySelector("#carType");
let carImage = document.querySelector("#carImage");
let body = document.querySelector("body");
let seq = 0;
nxtButton.addEventListener("click", () => {
    seq++;
    if (seq === 6) {
        seq = 0;
    }
    carName.innerText = cars[seq].name;
    carType.innerText = cars[seq].type;
    carImage.src = cars[seq].image;
    body.style.backgroundImage = cars[seq].backColor;
})
preButton.addEventListener("click", () => {
    seq--;
    if (seq === -1) {
        seq = cars.length - 1;
    }
    carName.innerText = cars[seq].name;
    carType.innerText = cars[seq].type;
    carImage.src = cars[seq].image;
    body.style.backgroundImage = cars[seq].backColor;
})