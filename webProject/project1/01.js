console.log("Welcome to Spotify");
// audioElement.play();
let songIndex = 0;
let audioElement = new Audio("songs/7.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  { songName: "Music1", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Music2", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "Music3", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "Music4", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Music5", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "Music6", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songName: "Music7", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
  { songName: "Music8", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songName: "Music9", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  { songName: "Music10", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" },
];

// songs.forEach((element, i) => {
//   console.log(element, i);
//   // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// });
console.log(myProgressBar);
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
