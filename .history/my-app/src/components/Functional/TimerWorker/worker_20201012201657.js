export default () => {
	self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
		if (!e) return;        

		console.log(e.data)

var msStart = null;
var msEnd = null;
var timeElapsed = null;
var TaskName = null;

  if (e.data == "timerStarted") {
	msStart = Date.now();
	console.log(msStart)
  } else if (e.data == "timerStopped") {
    msEnd = Date.now();
    timeElapsedCalculation(msStart,timeElapsed,msEnd);

    const timerWorkerResult = {
      startTimeMs: msStart,
      endTimeMs: msEnd,
      timePassedMs: timeElapsed,
    };
  
	postMessage(timerWorkerResult);
  
}
});

function timeElapsedCalculation(msStart,timeElapsed,msEnd) {
  timeElapsed = msEnd - msStart;
console.log(timeElapsed)
}


}


