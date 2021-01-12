'use strict';

let time = process.argv.slice(2);
time = time.sort()

const beeper = timer => {

  for (let sec of timer) {
    if (typeof(sec) === "string"){
      timer.splice(timer.indexOf(sec), 1);
    }
  }
  for (let sec of timer) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, sec * 1000)
  }
}

beeper(time)