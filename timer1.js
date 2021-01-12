'use strict';
//read the arguments and sort them for looping
let time = process.argv.slice(2);
time = time.sort()

const beeper = timer => {
  //check if theres any strings so we can remove them from the array
  for (let sec of timer) {
    if (typeof(sec) === "string"){
      timer.splice(timer.indexOf(sec), 1);
    }
  } //then loop through and set timers
  for (let sec of timer) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sec * 1000)
  }
}

beeper(time)