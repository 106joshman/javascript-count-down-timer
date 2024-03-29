// time left for one hour
let timeLeft = 0;

// audio file
var audio = new Audio();
audio.src = "Time up.mp3";

// time function
function time() {
  let theTime = document.getElementById("display");
  let mins = Math.floor(timeLeft / 60);
  if (mins < 10) {
    mins = "0" + mins;
  }
  var secs = Math.floor(timeLeft % 60);
  if (secs < 10) {
    secs = "0" + secs;
  }
  theTime.innerHTML = mins + ":" + secs;
  timeLeft = timeLeft - 1;

  // Notification
  if (timeLeft === -1) {
    clearInterval(countTime);
    document.body.style.background = "yellow";

    // to play audio file after timer stops
    audio.play();
  }
}

// countTime = setInterval(time, 1000);

// to start count down time
function start() {
  timeLeft = 120;
  document.body.style.background = "black";
  countTime = setInterval(time, 1000);
}

// to stop count down time
function pause() {
  clearInterval(countTime);
}

// to reset count down time
function reset() {
  timeLeft = 0;
  document.body.style.background = "black";

  // to stop audio file
  audio.pause();
  audio.currentTime = 0;
}

// to add more time
function add() {
  timeLeft = timeLeft + 60;
}

// to reduce time
function minus() {
  timeLeft = timeLeft < 30 ? timeLeft : timeLeft - 30;
}
