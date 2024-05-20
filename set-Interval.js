const secondsElement = document.getElementById("seconds");
const minutesElement = document.getElementById("minutes");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");

let intervalID;
let startTime = 0;
let elapsedTime;
// startTime = Date.now();

startButton.addEventListener("click", () => {
  secondsElement.innerText = "00";
  minutesElement.innerText = "00";
  clearInterval(intervalID);

  startTime = Date.now();
  intervalID = setInterval(tick, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalID);
});
function tick() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const newMinutes = Math.floor(elapsedTime / (1000 * 60));
  const newSeconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

  secondsElement.innerText = newSeconds.toString().padStart(2, "0");
  minutesElement.innerText = newMinutes.toString().padStart(2, "0");
}
