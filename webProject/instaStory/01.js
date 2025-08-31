let arr1 = [1, 0, 2, 3];
let myobj = [{ dp: "Anna3.jpg", story: "Anna20.jpg" },
{ dp: "Anna3.jpg", story: "Anna20.jpg" },
{ dp: "Anna3.jpg", story: "Anna20.jpg" },
{ dp: "Anna3.jpg", story: "Anna20.jpg" }];
let clutter = "";
arr1.forEach((element, idx) => {
    // console.log(element);
    // console.log(idx);
    clutter += `<div id="${idx}" class="storyBox"><img src="${myobj[idx].dp}" alt="yo"></div>`
});
document.querySelector(".container1").innerHTML = clutter;
let storyImg = document.querySelector(".storyBox img");
storyImg = Array.from(storyImg);
storyImg.forEach((element, idx) => {
    element.addEventListener("click", () => {
        // element.src = "Anna20.jpg";
        element.src = "myobj[idx].story";
    })
})
let story = document.querySelectorAll(".storyBox");
story=Array.from(story);
// console.log(story);
let arr2 = [0, 1, 2, 3];
arr2.forEach((element) => {
    story[element].addEventListener("click", () => {
        console.log("HELLO");
    })
})
