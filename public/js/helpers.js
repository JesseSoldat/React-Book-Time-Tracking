window.helpers = (function() {
	// console.log('Window Helpers');
  function newTimer(attrs = {}) {
    const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      id: uuid.v4(), // eslint-disable-line no-undef
      elapsed: 0,
    };

    return timer;
  }

	function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
  
    return millisecondsToHuman(totalElapsed);
  }

  function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);


    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  function pad(numberString, size) {
  	//4 mins comes in 
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    //4.length = 1 is less than 2 length so it becomes 04
    return padded;
  }

  return {
  	renderElapsedString,
  	millisecondsToHuman,
    newTimer
  }

})();