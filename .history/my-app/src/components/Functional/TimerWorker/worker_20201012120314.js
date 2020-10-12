export default () => {
    
    
    let msStart = null;
let msEnd = null;
let timeElapsed = null;

addEventListener("message", function (event) {
  if (event.data == "timerStarted") {
    msStart = Date.now();
  } else if (event.data == "timerStopped") {
    msEnd = Date.now();
    timeElapsedCalculation();

    const timerWorkerResult = {
      startTimeMs: msStart,
      endTimeMs: msEnd,
      timePassedMs: timeElapsed,
    };
    postMessage(timerWorkerResult);
  }
});

function timeElapsedCalculation() {
  timeElapsed = msEnd - msStart;
}

}
