let audioelement1 = new Audio("../songs/1.mp3");
let audioelement2 = new Audio("../songs/2.mp3");
let audioelement3 = new Audio("../songs/3.mp3");
let audioelement4 = new Audio("../songs/4.mp3");
let audioelement5 = new Audio("../songs/5.mp3");
let audioelement6 = new Audio("../songs/6.mp3");
let playbtn = document.getElementById("playbtn");
let listitems = document.getElementsByClassName("item");
let changeimg = document.getElementById("changimg");
let myprogressbar = document.getElementById("myprogressbar");

let songlistarray = [
  {
    songname: "What makes you beautiful",
    songimage: "../images/What_Makes_You_Beautiful_Album_Cover.jpg",
    songaudio: audioelement1,
  },
  {
    songname: "Blinding Lights",
    songimage: "../images/The_Weeknd_-_Blinding_Lights.png",
    songaudio: audioelement2,
  },
  {
    songname: "Shake It Off",
    songimage: "../images/shake_it_off.png",
    songaudio: audioelement3,
  },
  {
    songname: "Thank You Next",
    songimage: "../images/thank_you_next.jpg",
    songaudio: audioelement4,
  },
  {
    songname: "Photograph",
    songimage: "../images/Photograph.jpg",
    songaudio: audioelement5,
  },
  {
    songname: "Apna Bana Le",
    songimage: "../images/Apna_Bana_Le.jpg",
    songaudio: audioelement6,
  },
];

Array.from(listitems).forEach((element) => {
  element.addEventListener("click", () => {
    let songnametofind =
      element.getElementsByClassName("songname")[0].textContent;
    let changeplaybtn = element.getElementsByClassName("fa-solid")[0];
    songlistarray.forEach((ele) => {
      if (ele.songname == songnametofind) {
        playaudio(ele.songaudio, changeplaybtn);
        ProgressBar(ele.songaudio);
        changeimg.src = ele.songimage;
      }
    });
  });
});

function playaudio(audioelement, changeplaybtn) {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    changeplaybtn.classList.remove("fa-play");
    changeplaybtn.classList.add("fa-pause");
    playbtn.classList.remove("fa-play");
    playbtn.classList.add("fa-pause");
  } else {
    audioelement.pause();
    changeplaybtn.classList.remove("fa-pause");
    changeplaybtn.classList.add("fa-play");

    playbtn.classList.remove("fa-pause");
    playbtn.classList.add("fa-play");
  }
}

function ProgressBar(audioelement) {
  audioelement.addEventListener("timeupdate", () => {
    let progress = parseInt(
      (audioelement.currentTime / audioelement.duration) * 100
    );
    myprogressbar.value = progress;
  });
  myprogressbar.addEventListener("change", () => {
    audioelement.currentTime =
      (myprogressbar.value * audioelement.duration) / 100;
  });
}
