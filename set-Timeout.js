const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");

let intervalID;
let startTime = 0;
let elapsedTime = 0;
let timeoutID;


startButton.addEventListener("click", () => {
  secondsElement.innerText = "00";
  minutesElement.innerText = "00";
// clearTimeout(timeoutID);
  startTime = Date.now();
  tick();
});
let flag = true;
stopButton.addEventListener("click", () => {
  // flag = false;
clearTimeout(timeoutID);
});

function tick() {
  if (!flag) return;
  timeoutID = setTimeout(() => {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const newMinutes = Math.floor(elapsedTime / (1000 * 60));
    const newSeconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    secondsElement.innerText = newSeconds.toString().padStart(2, "0");
    minutesElement.innerText = newMinutes.toString().padStart(2, "0");
    tick();
  }, 1000);
}



