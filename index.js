// time left for one hour
let timeLeft = 3599;

// time function
function time() {
    let time = document.getElementById("display");
    let mins = Math.floor(timeLeft / 60);
        if (mins < 10){
            mins = "0" + mins;
        }

    var secs = Math.floor(timeLeft % 60);
        if (secs < 10){
            secs = "0" + secs;
        }

    time.innerHTML = mins + ":" + secs;
    time = timeLeft -= 1;
}

countTime = setInterval(time, 1000)

// to start count down time
function start() {
    countTime = setInterval(time, 1000);
}

// to stop count down time
function pause() {
    clearInterval(countTime);
}

// to reset count down time
function reset() {
    timeLeft = 3599;
}

// to add more time
function add() {
    timeLeft = timeLeft + 30;
}

// to reduce time
function minus() {
    timeLeft = timeLeft < 30? timeLeft : timeLeft - 30;
}

// Notification
// if ( timeLeft <= 0 ) {
//     timeLeft = 0
// } else {
//     document.getElementById("display").innerHTML = "END"
// }