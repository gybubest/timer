const timer = function(values) {
  let delay = 0;
  for (let time of values) {
    if (time > 0 && time !== NaN) {
      delay = time * 1000;
      setTimeout(() => process.stdout.write('\x07'), delay);
    }
  }
}

const values = process.argv.slice(2);
timer(values);